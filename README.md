# 🌿 The Soil Beneath

A full-stack e-commerce web application for buying indoor and outdoor plants.

Built using **React + TypeScript + FastAPI + PostgreSQL**, the application provides a modern shopping experience with product browsing, authentication, shopping cart, testimonials, and search functionality.

---

## 🌐 Live Demo

### Frontend (Cloudflare Pages)
https://the-soil-beneath.pages.dev/

### Backend API (Railway)
https://the-soil-beneath-production.up.railway.app/

API Documentation:
https://the-soil-beneath-production.up.railway.app/docs

---

# ✨ Features

## Customer Features

- Browse all plants
- Search products
- Browse by category
- Featured products section
- Product details page
- Customer testimonials
- User registration
- User login using JWT authentication
- Persistent authentication
- Shopping cart
- Responsive design

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- React Router
- Axios
- Tailwind CSS

## Backend

- FastAPI
- SQLAlchemy
- Pydantic
- JWT Authentication
- Passlib (Password Hashing)

## Database

- PostgreSQL

## Deployment

Frontend:
- Cloudflare Pages

Backend:
- Railway

---

# 📁 Project Structure

```
the-soil-beneath/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── assets/
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── db/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── main.py
│   │
│   ├── alembic/
│   ├── requirements.txt
│   └── .env
│
└── README.md
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/SayaniSen2022/the-soil-beneath.git

cd the-soil-beneath
```

---

# Backend Setup

Navigate to backend

```bash
cd backend
```

Create virtual environment

```bash
python -m venv .venv
```

Activate environment

### Windows

```bash
.venv\Scripts\activate
```

### Linux / Mac

```bash
source .venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run migrations

```bash
alembic upgrade head
```

Start FastAPI server

```bash
uvicorn app.main:app --reload
```

Backend runs at

```
http://127.0.0.1:8000
```

Swagger Docs

```
http://127.0.0.1:8000/docs
```

---

# Frontend Setup

Navigate to frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Create

```
.env.development
```

```env
VITE_API_BASE_URL=http://127.0.0.1:8000
```

Run development server

```bash
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# Environment Variables

## Frontend

### Development

```
VITE_API_BASE_URL=http://127.0.0.1:8000
```

### Production

```
VITE_API_BASE_URL=https://the-soil-beneath-production.up.railway.app
```

---

## Backend

Example

```env
DATABASE_URL=postgresql://username:password@host/database

SECRET_KEY=your-secret-key

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=30
```

---

# API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/v1/auth/signup |
| POST | /api/v1/auth/login |
| GET | /api/v1/auth/me |

---

## Products

| Method | Endpoint |
|---------|----------|
| GET | /api/v1/products |
| GET | /api/v1/products/featured |
| GET | /api/v1/products/categories |
| GET | /api/v1/product/{id} |

---

## Testimonials

| Method | Endpoint |
|---------|----------|
| GET | /api/v1/testimonials |

---

# Deployment

## Frontend

Hosted on Cloudflare Pages.

Production builds are automatically deployed from the `master` branch.

Build command

```bash
npm run build
```

Output directory

```
dist
```

---

## Backend

Hosted on Railway.

Start command

```bash
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

---

# Screenshots

Example: 
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/4f51c73e-3043-43d4-983c-ee8a8bf81136" />
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/fa1dc093-ed74-4631-9d47-3aabb2af7f58" />
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/4b35b989-172d-4522-8033-204a3717fd03" />
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/9e3c2df4-0e36-45d5-87c2-50c2bce1e3ee" />
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/0ac994a0-77c2-4482-9c4c-45d190563f42" />


---

# Future Enhancements

- Wishlist
- Order placement
- Checkout flow
- Payment Gateway Integration
- User Profile
- Order History
- Admin Dashboard
- Inventory Management
- Product Reviews
- Image Uploads
- Pagination
- Product Filters & Sorting

---

# Author

**Sayani Sen**

GitHub:
https://github.com/SayaniSen2022

LinkedIn:
https://www.linkedin.com/in/sayani-sen-535749147/

---

# License

This project is licensed under the MIT License.
