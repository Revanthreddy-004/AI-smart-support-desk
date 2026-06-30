from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text

from app.database.database import Base


class Ticket(Base):

    __tablename__ = "tickets"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    title = Column(
        String(200)
    )

    description = Column(
        Text
    )

    category = Column(
        String(100)
    )

    priority = Column(
        String(50)
    )

    status = Column(
        String(50),
        default="OPEN"
    )

    created_by = Column(
        String(150)
    )