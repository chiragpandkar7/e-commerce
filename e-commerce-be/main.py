from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId
import uvicorn
 
app = FastAPI()
 
# Use AsyncIOMotorClient for asynchronous database connection
client = AsyncIOMotorClient("mongodb://localhost:27017/")
db = client["myDb"]
collection = db["e-commerce"]
 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
 
@app.get("/products")
async def get_products():
    products = []
    async for product in collection.find():
        products.append(serialize_doc(product))
    return JSONResponse(content=products, status_code=status.HTTP_200_OK)
 
@app.get("/")
def welcome_func():
    return "Welcome"
 
# Updated helper function to handle both single and list of documents
def serialize_doc(doc):
    if isinstance(doc, list):
        return [serialize_doc(d) for d in doc]
    if isinstance(doc, dict):
        for key, value in doc.items():
            if isinstance(value, ObjectId):
                doc[key] = str(value)
            elif isinstance(value, (dict, list)):
                doc[key] = serialize_doc(value)
    return doc
 
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)