from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.database.dependency import get_db
from app.models.ticket import Ticket
from app.schemas.ticket_schema import TicketCreate

from app.services.ai_service import analyze_ticket

router = APIRouter(
    prefix="/tickets",
    tags=["Tickets"]
)


@router.post("/")
def create_ticket(
    ticket: TicketCreate,
    db: Session = Depends(get_db)
):

    ai_result = analyze_ticket(
        ticket.description
    )

    new_ticket = Ticket(
        title=ticket.title,
        description=ticket.description,
        category=ticket.category,
        priority=ticket.priority,
        status="OPEN",
        created_by="User"
    )

    db.add(new_ticket)
    db.commit()
    db.refresh(new_ticket)

    return {
        "message": "Ticket Created Successfully",
        "ticket_id": new_ticket.id,
        "ai_analysis": ai_result
    }


@router.get("/")
def get_all_tickets(
    db: Session = Depends(get_db)
):

    return db.query(Ticket).all()


@router.get("/open")
def open_tickets(
    db: Session = Depends(get_db)
):

    return (
        db.query(Ticket)
        .filter(Ticket.status == "OPEN")
        .all()
    )


@router.get("/high-priority")
def high_priority(
    db: Session = Depends(get_db)
):

    return (
        db.query(Ticket)
        .filter(Ticket.priority == "HIGH")
        .all()
    )


@router.put("/{ticket_id}")
def close_ticket(
    ticket_id: int,
    db: Session = Depends(get_db)
):

    ticket = (
        db.query(Ticket)
        .filter(Ticket.id == ticket_id)
        .first()
    )

    if not ticket:
        return {
            "message": "Ticket not found"
        }

    ticket.status = "CLOSED"

    db.commit()

    return {
        "message": "Ticket Closed"
    }


@router.delete("/{ticket_id}")
def delete_ticket(
    ticket_id: int,
    db: Session = Depends(get_db)
):

    ticket = (
        db.query(Ticket)
        .filter(Ticket.id == ticket_id)
        .first()
    )

    if not ticket:
        return {
            "message": "Ticket not found"
        }

    db.delete(ticket)
    db.commit()

    return {
        "message": "Ticket Deleted"
    }