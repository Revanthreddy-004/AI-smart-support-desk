# AI Smart Support Desk with Generative AI

An AI-powered customer support ticket management system built using Angular, FastAPI, PostgreSQL, JWT Authentication, and Groq LLM. The system allows users to create support tickets, receive AI-generated analysis, track ticket status, and manage support requests efficiently.

---

# Project Overview

AI Smart Support Desk is a full-stack ticket management platform designed to help organizations handle customer support requests intelligently.

The system uses Generative AI to analyze support tickets and provide automated suggestions, helping reduce manual effort and improve issue resolution.

---

# Features

✅ User Registration

✅ User Login

✅ JWT Authentication

✅ Protected APIs

✅ Dashboard Analytics

✅ Create Support Tickets

✅ AI-Powered Ticket Analysis

✅ View All Tickets

✅ View High Priority Tickets

✅ Close Tickets

✅ Delete Tickets

✅ Logout Functionality

---

# Tech Stack

## Frontend

- Angular 22
- TypeScript
- HTML
- CSS
- Axios

## Backend

- FastAPI
- SQLAlchemy
- JWT Authentication
- Pydantic

## Database

- PostgreSQL

## AI Integration

- Groq API
- Llama 3 Model

---

# Project Architecture

Angular Frontend
        ↓
FastAPI REST APIs
        ↓
JWT Authentication
        ↓
PostgreSQL Database
        ↓
Groq AI Analysis

---

# Project Screens

### Home Page

- Login
- Register

### Register Page

- User Registration

### Login Page

- User Authentication

### Dashboard

Displays:

- Total Tickets
- Open Tickets
- Closed Tickets
- High Priority Tickets

### Create Ticket

Allows users to:

- Create support tickets
- Get AI analysis

### Ticket List

- View all tickets
- Close tickets
- Delete tickets

### High Priority Page

Displays only high-priority tickets.

---

# AI Workflow

User Creates Ticket
        ↓
Ticket Description Sent to Groq API
        ↓
Llama 3 Processes the Request
        ↓
AI Suggests Solutions
        ↓
Response Returned to User

---

# Database Tables

## User Table

| Column | Type |
|--------|------|
| id | Integer |
| email | String |
| password | String |

---

## Ticket Table

| Column | Type |
|--------|------|
| id | Integer |
| title | String |
| description | Text |
| category | String |
| priority | String |
| status | String |
| created_by | String |

---

# API Endpoints

## Authentication APIs

### Register User

```http
POST /auth/register
```

Request:

```json
{
    "email": "user@gmail.com",
    "password": "password123"
}
```

---

### Login User

```http
POST /auth/login
```

Response:

```json
{
    "access_token": "JWT_TOKEN"
}
```

---

## User APIs

### Get Current User

```http
GET /users/me
```

---

## Ticket APIs

### Create Ticket

```http
POST /tickets/
```

Request:

```json
{
    "title": "Payment Failed",
    "description": "Customer payment deducted but order was not placed.",
    "category": "Billing",
    "priority": "HIGH"
}
```

---

### Get All Tickets

```http
GET /tickets/
```

---

### Get Open Tickets

```http
GET /tickets/open
```

---

### Get High Priority Tickets

```http
GET /tickets/high-priority
```

---

### Close Ticket

```http
PUT /tickets/{ticket_id}
```

---

### Delete Ticket

```http
DELETE /tickets/{ticket_id}
```

---

## Dashboard APIs

### Analytics

```http
GET /dashboard/analytics
```

Response:

```json
{
    "total_tickets": 10,
    "open_tickets": 7,
    "closed_tickets": 3,
    "high_priority_tickets": 4
}
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/your-username/AI-Smart-Support-Desk.git
```

---

# Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs at:

```
http://localhost:8000
```

Swagger Documentation:

```
http://localhost:8000/docs
```

---

# Frontend Setup

```bash
cd frontend

npm install

ng serve
```

Frontend runs at:

```
http://localhost:4200
```

---

# Environment Variables

Create a `.env` file inside backend:

```env
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=your_db_port
DB_NAME=support_db

SECRET_KEY=your_secret_key
ALGORITHM=HS256

GROQ_API_KEY=your_groq_api_key
```

---

# Folder Structure

```
AI-Smart-Support-Desk
│
├── backend
│   ├── app
│   ├── routers
│   ├── models
│   ├── schemas
│   ├── services
│   └── database
│
├── frontend
│   └── src
│       └── app
│           ├── pages
│           └── services
│
└── README.md
```

---

# Future Enhancements

- Role-Based Access Control
- Admin Dashboard
- Email Notifications
- AI Chatbot Support
- Charts and Graphs
- Ticket Assignment System
- Dark Mode

---

# Challenges Faced

- JWT Authentication Integration
- Angular Change Detection Issues
- Groq API Integration
- FastAPI CORS Configuration
- Angular Routing Issues
- API Authorization Handling

---

# Resume Description

Developed an AI-powered support ticket management system using Angular, FastAPI, PostgreSQL, JWT Authentication, and Groq LLM for automated ticket analysis and solution recommendations.

---

# Project Outcome

- Reduced manual ticket categorization.
- Improved issue analysis through AI.
- Provided dashboard analytics.
- Implemented secure authentication.
- Built a real-world full-stack AI application.

---

# Author

Baddam Revanth Reddy

B.Tech AIML | Java Full Stack Developer | Python Full Stack Developer

---

# License

This project is developed for educational and portfolio purposes.