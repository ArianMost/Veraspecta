from pydantic import BaseModel

class ProductCreate(BaseModel):
    type: str
    color: str
    brand: str
    material: str
    size: int
