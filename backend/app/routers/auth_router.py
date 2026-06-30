from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.database.dependency import get_db
from app.models.user import User

from app.schemas.user_schema import (
    UserCreate,
    UserLogin
)

from app.auth.security import (
    hash_password,
    verify_password
)

from app.auth.jwt_handler import (
    create_access_token
)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/register")
def register(
    user: UserCreate,
    db: Session = Depends(get_db)
):

    hashed_password = hash_password(
        user.password
    )

    new_user = User(
        username=user.username,
        email=user.email,
        password=hashed_password,
        role=user.role
    )

    db.add(new_user)
    db.commit()

    return {
        "message":
        "User Registered Successfully"
    }


@router.post("/login")
def login(
    user: UserLogin,
    db: Session = Depends(get_db)
):

    db_user = (
        db.query(User)
        .filter(
            User.email == user.email
        )
        .first()
    )

    if not db_user:
        return {
            "message":
            "User not found"
        }

    if not verify_password(
        user.password,
        db_user.password
    ):
        return {
            "message":
            "Invalid password"
        }

    token = create_access_token(
        {
            "sub":
            db_user.email
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }