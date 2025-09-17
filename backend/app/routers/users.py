from fastapi import APIRouter
from app.models.user import UserCreate
from app.crud import user_crud

router = APIRouter()

@router.post("/")
def create_user(user: UserCreate):
    return user_crud.create_user(user)
