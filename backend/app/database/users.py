from aiomysql.connection import Connection
from ..models.users import User


async def addUser(user: User, conn: Connection):
    async with conn.cursor() as cursor:
        try:
            await cursor.execute("""SELECT * FROM users WHERE aadhar_no = %s""", (user.aadhar_no))
            user_data = await cursor.fetchone()
            if user_data:
                await cursor.close()
                return False

            await cursor.execute("""INSERT INTO users 
                                    (aadhar_no, name, gender, contact_no, emergency_no, address, birth_date, allergies, reg_meds, medical_conditions, remarks, image)
                                    VALUES (%s, %s, %s, %s, %s, %s)""",
                                 (user.aadhar_no, user.name, user.gender, user.contact_no, user.emergency_no, user.address, user.birth_date, user.allergies, user.reg_meds, user.medical_conditions, user.remarks, user.image))
            await conn.commit()

            await cursor.execute("""SELECT * FROM users WHERE email = %s""",
                                 (user.aadhar_no))
            user_data = await cursor.fetchone()

        except Exception as err:
            print(err)

        await cursor.close()

    return True
