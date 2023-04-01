from fastapi import APIRouter, Body, UploadFile, File, Depends, status
from fastapi.responses import JSONResponse
from ..models.users import User
from aiomysql.connection import Connection
from ..database import Database
from ..database.users import addUser


user_router = APIRouter()


@user_router.post("/register")
async def register_user(aadhar_no: str = Body(...),
                        name: str = Body(...),
                        gender: str = Body(...),
                        contact_no: str = Body(...),
                        emergency_no: str = Body(...),
                        address: str = Body(...),
                        birth_date: str = Body(...),
                        allergies: str = Body(...),
                        reg_meds: str = Body(...),
                        medical_conditions: str = Body(...),
                        remarks: str = Body(...),
                        image: UploadFile = File(...),
                        conn: Connection = Depends(Database.get_db)):

    user = User(aadhar_no, name, gender, contact_no, emergency_no, address,
                birth_date, allergies, reg_meds, medical_conditions, remarks)
    user.image = f"U-{aadhar_no}.png"

    user_data = await addUser(user, conn)

    if not user_data:  # i.e. user exists
        return JSONResponse(content="User with given aadhar no already exist.", status_code=status.HTTP_403_FORBIDDEN)

    with open(f"app/static/images/users/{user.image}", 'wb') as file:
        pic_data = await image.read()
        file.write(pic_data)

    return JSONResponse(content={
        "message": "Success",
    }, status_code=status.HTTP_201_CREATED)
