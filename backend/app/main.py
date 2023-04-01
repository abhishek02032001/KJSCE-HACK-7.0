from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from .database import Database

from .routers import *

app = FastAPI()

app.mount("/static", StaticFiles(directory="app/static"), name="static")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup():
    await Database.establish_db_connection()


@app.on_event("shutdown")
async def shutdown():
    await Database.close_db_connection()


@app.get("/")
async def main():
    return "Welcome to MedMesh"


app.include_router(doctor_router, tags=["Doctors"], prefix="/doctors")
app.include_router(user_router, tags=["Users"], prefix="/users")
