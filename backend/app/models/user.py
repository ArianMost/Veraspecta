from pydantic import BaseModel

class UserCreate(BaseModel):
    name: str
    email: str
    chest_cm: int
    waist_cm: int
    hips_cm: int
    height_cm: int
