from fastapi import APIRouter
from fastapi import Depends

from app.auth.oauth2 import get_current_user

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@router.get("/me")
def current_user(
    current_user: str = Depends(
        get_current_user
    )
):

    return {
        "email": current_user
    }