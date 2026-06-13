from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles
from ai_engine import generate_outfit

app = FastAPI()

class UserInput(BaseModel):
    occasion: str
    color: str
    style: str

app.mount("/", StaticFiles(directory="frontend", html=True), name="frontend")

@app.post("/recommend-style")
def recommend(data: UserInput):
    result = generate_outfit(data.occasion, data.color, data.style)
    return {"recommendation": result}

