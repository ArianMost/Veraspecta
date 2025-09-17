from app.db import db
from app.models.product import ProductCreate

def create_product(product: ProductCreate):
    result = db.products.insert_one(product.dict())
    return {"id": str(result.inserted_id), "message": "Product created"}
