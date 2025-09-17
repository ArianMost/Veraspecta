import os
from pymongo import MongoClient

mongo_url = os.getenv("MONGO_URL", "mongodb://localhost:27017/veraspecta")
client = MongoClient(mongo_url)
db = client.get_database()