# Veraspecta
An AI-powered virtual fitting room that lets users create personalized avatars and try on clothes online.
Built with **FastAPI (backend)**, **Next.js (frontend)**, **MongoDB (database)**, and **Docker Compose**.

---

## Tech Stack
- **Backend**: FastAPI + Python  
- **Frontend**: Next.js + TypeScript  
- **Database**: MongoDB  
- **Database UI**: Mongo Express  
- **Containerization**: Docker & Docker Compose  

---

## Project Structure
Veraspecta/
├── backend/ # FastAPI backend
│ ├── app/
│ │ ├── routers/ # API routes (users, auth, products, etc.)
│ │ ├── crud/ # Database logic
│ │ ├── models/ # Pydantic models
│ │ └── db.py # MongoDB connection
│ ├── Dockerfile
│ └── requirements.txt
│
├── frontend/ # Next.js frontend
│ ├── app/ # Next.js 13+ app router
│ ├── components/ # React components
│ ├── Dockerfile
│ └── package.json
│
├── docker-compose.yml # Orchestrates backend, frontend, MongoDB
└── .env # Environment variables

---

## Setup Instructions

### 1. Clone the repo
```bash
  git clone https://github.com/ArianMost/Veraspecta.git
  cd Veraspecta

### 2. Create .env file
Add this in .env at project root:
  ## -----------------------------
  # MongoDB Configuration
  # -----------------------------
  MONGO_INITDB_DATABASE=veraspecta
  MONGO_INITDB_ROOT_USERNAME=root
  MONGO_INITDB_ROOT_PASSWORD=example

  # Connection string used by backend
  MONGO_URL=mongodb://root:example@mongodb:27017/veraspecta?authSource=admin

  # -----------------------------
  # Mongo Express Configuration
  # -----------------------------
  ME_CONFIG_MONGODB_ENABLE_ADMIN=true
  ME_CONFIG_MONGODB_URL=mongodb://root:example@mongodb:27017/?authSource=admin

  # Basic auth for Mongo Express Web UI
  ME_CONFIG_BASICAUTH_USERNAME=admin
  ME_CONFIG_BASICAUTH_PASSWORD=secret

### 3. Run the project with Docker Compose
```bash
  docker-compose --env-file .env up --build


## Services
Backend (FastAPI) → http://localhost:8000/docs
Frontend (Next.js) → http://localhost:3000
MongoDB → localhost:27017 (inside Docker network)
Mongo Express (DB Admin UI) → http://localhost:8081






