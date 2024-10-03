import sqlite3
from fastapi import FastAPI, Form, UploadFile, File, HTTPException
from fastapi.responses import HTMLResponse, StreamingResponse
import qrcode
from PIL import Image, ImageDraw, ImageFont
from io import BytesIO
import time

app = FastAPI()

DATABASE = "students.db"

# Database Setup
def setup_database():
    conn = sqlite3.connect(DATABASE)
    conn.execute('''CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        post TEXT NOT NULL,
        image BLOB NOT NULL,
        unique_id TEXT NOT NULL
    )''')
    conn.commit()
    conn.close()

setup_database()

# Serve registration page
@app.get("/", response_class=HTMLResponse)
async def serve_registration_page():
    with open("static/register.html", "r") as file:
        return HTMLResponse(content=file.read())

# Register user (handles POST requests)
@app.post("/register")
async def register_user(
    name: str = Form(...),
    email: str = Form(...),
    post: str = Form(...),
    image: UploadFile = File(...)
):
    try:
        # Read image
        image_data = await image.read()

        # Generate unique ID
        unique_id = f"{name.replace(' ', '').lower()}-{int(time.time())}"

        # Insert into database
        conn = sqlite3.connect(DATABASE)
        cursor = conn.cursor()
        cursor.execute("INSERT INTO students (name, email, post, image, unique_id) VALUES (?, ?, ?, ?, ?)",
                       (name, email, post, image_data, unique_id))
        conn.commit()
        conn.close()

        # Generate QR code
        qr = qrcode.QRCode(version=1, box_size=10, border=5)
        qr.add_data(f"http://127.0.0.1:8000/id_card/{unique_id}")
        qr.make(fit=True)
        qr_img = qr.make_image(fill="black", back_color="white")

        # Create ID card with image, name, and QR code
        img = Image.new('RGB', (600, 400), color=(255, 255, 255))
        d = ImageDraw.Draw(img)

        # Add details with formatting
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()

        d.text((150, 50), f"Name: {name}", fill=(0, 0, 0), font=font_large)
        d.text((150, 100), f"Post: {post}", fill=(0, 0, 0), font=font_small)
        d.text((150, 150), f"ID: {unique_id}", fill=(0, 0, 0), font=font_small)
        d.text((150, 200), "AIML Community", fill=(0, 0, 0), font=font_small)

        # User's uploaded image
        user_img = Image.open(BytesIO(image_data)).resize((150, 150))
        img.paste(user_img, (10, 50))

        # Paste QR code onto ID card
        qr_img = qr_img.resize((100, 100))
        img.paste(qr_img, (480, 250))

        # Send ID card image as response
        buffer = BytesIO()
        img.save(buffer, format="PNG")
        buffer.seek(0)

        return StreamingResponse(buffer, media_type="image/png")

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Registration failed: {str(e)}")

# Serve login page
@app.get("/login", response_class=HTMLResponse)
async def serve_login_page():
    with open("static/login.html", "r") as file:
        return HTMLResponse(content=file.read())

# Retrieve and display ID card by unique ID
@app.post("/login")
async def display_id_card(unique_id: str = Form(...)):
    try:
        conn = sqlite3.connect(DATABASE)
        cursor = conn.cursor()
        cursor.execute("SELECT name, post, image FROM students WHERE unique_id = ?", (unique_id,))
        result = cursor.fetchone()
        conn.close()

        if result:
            name, post, image_data = result

            # Generate ID card with image, name, and QR code
            img = Image.new('RGB', (600, 400), color=(255, 255, 255))
            d = ImageDraw.Draw(img)

            # Add details
            font_large = ImageFont.load_default()
            font_small = ImageFont.load_default()

            d.text((150, 50), f"Name: {name}", fill=(0, 0, 0), font=font_large)
            d.text((150, 100), f"Post: {post}", fill=(0, 0, 0), font=font_small)
            d.text((150, 150), f"ID: {unique_id}", fill=(0, 0, 0), font=font_small)
            d.text((150, 200), "AIML Community", fill=(0, 0, 0), font=font_small)

            # User's uploaded image
            user_img = Image.open(BytesIO(image_data)).resize((150, 150))
            img.paste(user_img, (10, 50))

            buffer = BytesIO()
            img.save(buffer, format="PNG")
            buffer.seek(0)

            return StreamingResponse(buffer, media_type="image/png")
        else:
            raise HTTPException(status_code=404, detail="ID not found")

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to retrieve ID card: {str(e)}")
