from pydantic import BaseModel, EmailStr


class User(BaseModel):
    aadhar_no: str
    name: str
    gender: str
    contact_no: str
    emergency_no: str
    address: str
    birth_date: str
    allergies: str
    reg_meds: str
    medical_conditions: str
    remarks: str
    image: str = None
