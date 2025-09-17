from app.db import db
from app.models.user import UserCreate

def create_user(user: UserCreate):
    result = db.users.insert_one(user.dict())
    return {"id": str(result.inserted_id), "message": "User created"}
