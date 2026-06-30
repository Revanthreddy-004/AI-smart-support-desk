from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends

from app.database.dependency import get_db
from app.models.ticket import Ticket

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/analytics")
def analytics(
    db: Session = Depends(get_db)
):

    total = db.query(Ticket).count()

    open_tickets = (
        db.query(Ticket)
        .filter(Ticket.status == "OPEN")
        .count()
    )

    closed_tickets = (
        db.query(Ticket)
        .filter(Ticket.status == "CLOSED")
        .count()
    )

    high_priority = (
        db.query(Ticket)
        .filter(Ticket.priority == "HIGH")
        .count()
    )

    return {
        "total_tickets": total,
        "open_tickets": open_tickets,
        "closed_tickets": closed_tickets,
        "high_priority_tickets": high_priority
    }


@router.get("/category")
def category_stats(
    db: Session = Depends(get_db)
):

    tickets = db.query(Ticket).all()

    result = {}

    for ticket in tickets:

        category = ticket.category

        if category not in result:
            result[category] = 1
        else:
            result[category] += 1

    return result