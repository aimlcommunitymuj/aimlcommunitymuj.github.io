const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const QRCode = require('qrcode');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const sharp = require('sharp'); // Import sharp
const app = express();
const PORT = process.env.PORT || 3000;

// Set up body-parser and multer
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const upload = multer({ dest: 'uploads/' }); // Temporary storage for uploaded images

// SQLite database setup
const db = new sqlite3.Database('students.db');

// Serve static files
app.use(express.static(path.join(__dirname, 'static')));

// Serve registration page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'register.html'));
});

// Register user (handles POST requests)
app.post('/register', upload.single('image'), async (req, res) => {
    const { name, email, post } = req.body;
    const imagePath = req.file.path;

    try {
        // Generate unique ID
        const uniqueId = `${name.replace(' ', '').toLowerCase()}-${Date.now()}`;

        // Insert into database
        db.run(`INSERT INTO students (name, email, post, image, unique_id) VALUES (?, ?, ?, ?, ?)`, 
            [name, email, post, fs.readFileSync(imagePath), uniqueId], (err) => {
                if (err) {
                    return res.status(500).send(`Database error: ${err.message}`);
                }
            });

        // Generate QR code with the unique ID URL
        const qrUrl = `http://localhost:${PORT}/id_card/${uniqueId}`;
        const qrImage = await QRCode.toBuffer(qrUrl);

        // Create ID card using sharp
        const userImage = await sharp(imagePath).resize(100, 100).toBuffer(); // Resize user image
        const qrImageBuffer = await sharp(qrImage).resize(100, 100).toBuffer(); // Resize QR code

        // Create ID card dimensions
        const cardWidth = 400;
        const cardHeight = 200;

        // Create an empty ID card image
        const idCard = await sharp({
            create: {
                width: cardWidth,
                height: cardHeight,
                channels: 3,
                background: { r: 255, g: 255, b: 255 } // White background
            }
        })
        .composite([
            // Name and Post
            {
                input: Buffer.from(`<svg width="${cardWidth}" height="${cardHeight}">
                    <text x="10" y="30" font-size="20" fill="black">Name: ${name}</text>
                    <text x="10" y="60" font-size="20" fill="black">Post: ${post}</text>
                    <text x="10" y="90" font-size="20" fill="black">ID: ${uniqueId}</text>
                </svg>`),
                top: 10,
                left: 10
            },
            // User image
            {
                input: userImage,
                top: 100, // Position the user image
                left: 10
            },
            // QR code image
            {
                input: qrImageBuffer,
                top: 100, // Position the QR code image
                left: 280 // Adjust the left position for the QR code
            }
        ])
        .png()
        .toBuffer();

        res.set('Content-Type', 'image/png');
        res.send(idCard);

        // Cleanup: remove the uploaded image file
        fs.unlinkSync(imagePath);
    } catch (error) {
        res.status(500).send(`Registration failed: ${error.message}`);
    }
});

// Serve ID card based on unique ID
app.get('/id_card/:uniqueId', (req, res) => {
    db.get(`SELECT name, post, image FROM students WHERE unique_id = ?`, [req.params.uniqueId], async (err, row) => {
        if (err) {
            return res.status(500).send(`Database error: ${err.message}`);
        }
        if (row) {
            const { name, post, image } = row;

            // Create ID card using sharp
            const userImage = await sharp(image).resize(100, 100).toBuffer(); // Resize user image

            // Create ID card dimensions
            const cardWidth = 400;
            const cardHeight = 200;

            const idCard = await sharp({
                create: {
                    width: cardWidth,
                    height: cardHeight,
                    channels: 3,
                    background: { r: 255, g: 255, b: 255 } // White background
                }
            })
            .composite([
                // Name and Post
                {
                    input: Buffer.from(`<svg width="${cardWidth}" height="${cardHeight}">
                        <text x="10" y="30" font-size="20" fill="black">Name: ${name}</text>
                        <text x="10" y="60" font-size="20" fill="black">Post: ${post}</text>
                        <text x="10" y="90" font-size="20" fill="black">ID: ${req.params.uniqueId}</text>
                    </svg>`),
                    top: 10,
                    left: 10
                },
                // User image
                {
                    input: userImage,
                    top: 100,
                    left: 10
                }
            ])
            .png()
            .toBuffer();

            res.set('Content-Type', 'image/png');
            res.send(idCard);
        } else {
            res.status(404).send('ID not found');
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
