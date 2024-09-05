import sqlite3
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import time

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS for all domains for simplicity
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)


# Connect to the database created in DB Browser
conn = sqlite3.connect(r"C:\Users\HP\Downloads\students.db", check_same_thread=False)  # Update the path to your database file
cursor = conn.cursor()

# Define the student data model
class Student(BaseModel):
    name: str
    email: str

# Generate a unique ID based on name and timestamp
def generate_unique_id(name: str) -> str:
    timestamp = str(int(time.time()))
    unique_id = f"{name.replace(' ', '').lower()}-{timestamp}"
    return unique_id

# Register the student and store their details
@app.post("/register")
def register_student(student: Student):
    name = student.name
    email = student.email

    cursor.execute("SELECT * FROM students WHERE email = ?", (email,))
    if cursor.fetchone():
        raise HTTPException(status_code=400, detail="Email already registered")

    unique_id = generate_unique_id(name)
    cursor.execute("INSERT INTO students (name, email, unique_id) VALUES (?, ?, ?)", (name, email, unique_id))
    conn.commit()

    return {"message": "Registration successful", "unique_id": unique_id}

@app.get("/students")
def get_students():
    cursor.execute("SELECT * FROM students")
    students = cursor.fetchall()
    return {"students": students}
 