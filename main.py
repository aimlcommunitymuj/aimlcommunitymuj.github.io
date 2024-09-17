import sqlite3
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import time
import razorpay
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

# Razorpay client setup
razorpay_client = razorpay.Client(auth=("YOUR_RAZORPAY_KEY", "YOUR_RAZORPAY_SECRET"))

# Define the student data model
class Student(BaseModel):
    name: str
    email: str
    payment_id: str

# Generate a unique ID based on name and timestamp
def generate_unique_id(name: str) -> str:
    timestamp = str(int(time.time()))
    unique_id = f"{name.replace(' ', '').lower()}-{timestamp}"
    return unique_id

# Connect to the database
def get_db_connection():
    try:
        conn = sqlite3.connect(r"C:\Users\HP\Downloads\students.db", check_same_thread=False)
        conn.execute("PRAGMA busy_timeout = 5000")  # Wait for 5 seconds if the database is locked
        return conn
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Could not connect to the database: {str(e)}")

# Register the student and store their details
@app.post("/register")
async def register_student(student: Student):
    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        unique_id = generate_unique_id(student.name)

        # Verify the payment using Razorpay's API
        try:
            razorpay_client.payment.fetch(student.payment_id)  # Verify payment_id exists
        except Exception as e:
            raise HTTPException(status_code=400, detail=f"Payment verification failed: {str(e)}")

        # Insert the student data into the database
        cursor.execute("INSERT INTO students (name, email, unique_id) VALUES (?, ?, ?)", 
                       (student.name, student.email, unique_id))
        conn.commit()

        return {"message": "Student registered successfully", "unique_id": unique_id}
    
    except sqlite3.OperationalError as e:
        print(f"Database error: {str(e)}")  # Log the error to the console
        raise HTTPException(status_code=500, detail="Database is locked or unavailable. Please try again.")
    
    except Exception as e:
        print(f"Error: {str(e)}")  # Print error details to the console
        conn.rollback()  # Rollback in case of error
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")
    
    finally:
        cursor.close()
        conn.close()  # Ensure the connection is closed after use

# Retrieve all students
@app.get("/students")
async def get_students():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    try:
        # Query to fetch all students
        cursor.execute("SELECT * FROM students")
        students = cursor.fetchall()

        return {"students": students}
    
    except sqlite3.OperationalError as e:
        print(f"Database error: {str(e)}")  # Log the error to the console
        raise HTTPException(status_code=500, detail="Database is locked or unavailable. Please try again.")
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")
    
    finally:
        cursor.close()
        conn.close()  # Ensure the connection is closed after use
