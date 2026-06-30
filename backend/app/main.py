from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.database import Base, engine

from app.models.user import User
from app.models.ticket import Ticket

from app.routers.auth_router import router as auth_router
from app.routers.user_router import router as user_router
from app.routers.ticket_router import router as ticket_router
from app.routers.dashboard_router import (
    router as dashboard_router
)
Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(user_router)
app.include_router(ticket_router)
app.include_router(dashboard_router)

@app.get("/")
def home():
    return {
        "message": "AI Smart Support Desk"
    }