from fastapi import APIRouter
from app.models.product import ProductCreate
from app.crud import product_crud

router = APIRouter()

@router.post("/")
def create_product(product: ProductCreate):
    return product_crud.create_product(product)
