# import sqlite3
# from fastapi import FastAPI, Form, UploadFile, File, HTTPException
# from fastapi.responses import HTMLResponse, StreamingResponse
# import qrcode
# from PIL import Image, ImageDraw, ImageFont
# from io import BytesIO
# import time
# import os

# app = FastAPI()

# DATABASE = "students.db"

# # Database Setup
# def setup_database():
#     conn = sqlite3.connect(DATABASE)
#     conn.execute('''CREATE TABLE IF NOT EXISTS students (
#         id INTEGER PRIMARY KEY AUTOINCREMENT,
#         name TEXT NOT NULL,
#         email TEXT NOT NULL,
#         post TEXT NOT NULL,
#         image BLOB NOT NULL,
#         unique_id TEXT NOT NULL
#     )''')
#     conn.commit()
#     conn.close()

# setup_database()

# # Serve registration page
# @app.get("/", response_class=HTMLResponse)
# async def serve_registration_page():
#     with open("static/register.html", "r") as file:
#         return HTMLResponse(content=file.read())

# # Register user (handles POST requests)
# @app.post("/register")
# async def register_user(
#     name: str = Form(...),
#     email: str = Form(...),
#     post: str = Form(...),
#     image: UploadFile = File(...)
# ):
#     try:
#         # Read image
#         image_data = await image.read()

#         # Generate unique ID
#         unique_id = f"{name.replace(' ', '').lower()}-{int(time.time())}"

#         # Insert into database
#         conn = sqlite3.connect(DATABASE)
#         cursor = conn.cursor()
#         cursor.execute("INSERT INTO students (name, email, post, image, unique_id) VALUES (?, ?, ?, ?, ?)",
#                        (name, email, post, image_data, unique_id))
#         conn.commit()
#         conn.close()

#         # Generate QR code with the unique ID URL
#         qr_url = f"http://127.0.0.1:8000/id_card/{unique_id}"  # Update to your live server URL when deployed
#         qr = qrcode.QRCode(version=1, box_size=10, border=5)
#         qr.add_data(qr_url)
#         qr.make(fit=True)
#         qr_img = qr.make_image(fill="black", back_color="white")

#         # Create ID card
#         img = Image.new('RGB', (400, 200), color=(255, 255, 255))
#         d = ImageDraw.Draw(img)
#         font = ImageFont.load_default()
#         d.text((10, 10), f"Name: {name}", fill=(0, 0, 0), font=font)
#         d.text((10, 30), f"Post: {post}", fill=(0, 0, 0), font=font)
#         d.text((10, 50), f"ID: {unique_id}", fill=(0, 0, 0), font=font)

#         user_img = Image.open(BytesIO(image_data)).resize((100, 100))
#         img.paste(user_img, (10, 70))

#         qr_img = qr_img.resize((100, 100))
#         img.paste(qr_img, (280, 70))

#         # Save final ID card image
#         buffer = BytesIO()
#         img.save(buffer, format="PNG")
#         buffer.seek(0)

#         return StreamingResponse(buffer, media_type="image/png")

#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Registration failed: {str(e)}")

# # Serve ID card based on unique ID
# @app.get("/id_card/{unique_id}", response_class=StreamingResponse)
# async def get_id_card(unique_id: str):
#     try:
#         conn = sqlite3.connect(DATABASE)
#         cursor = conn.cursor()
#         cursor.execute("SELECT name, post, image FROM students WHERE unique_id = ?", (unique_id,))
#         user = cursor.fetchone()
#         conn.close()

#         if user:
#             name, post, image_data = user
#             # Create ID card image
#             img = Image.new('RGB', (400, 200), color=(255, 255, 255))
#             d = ImageDraw.Draw(img)
#             font = ImageFont.load_default()
#             d.text((10, 10), f"Name: {name}", fill=(0, 0, 0), font=font)
#             d.text((10, 30), f"Post: {post}", fill=(0, 0, 0), font=font)
#             d.text((10, 50), f"ID: {unique_id}", fill=(0, 0, 0), font=font)

#             user_img = Image.open(BytesIO(image_data)).resize((100, 100))
#             img.paste(user_img, (10, 70))

#             buffer = BytesIO()
#             img.save(buffer, format="PNG")
#             buffer.seek(0)

#             return StreamingResponse(buffer, media_type="image/png")
#         else:
#             raise HTTPException(status_code=404, detail="ID not found")

#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Failed to retrieve ID card: {str(e)}")
