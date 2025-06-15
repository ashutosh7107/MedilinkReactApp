# MedilinkReactApp# MedilinkReactApp

MedilinkReactApp is a full-stack web application featuring a React frontend and an Express backend with a MySQL database. It provides a medical services portal with user authentication, appointment booking, and informational pages about services, blogs, and contact details.

---

## Features

- User registration and login (with JWT authentication)
- Password reset (forgot password)
- Browse medical services
- Blog and informational pages
- Contact form
- Responsive UI with React and Bootstrap

---

## Folder Structure

```
ReactFrontendExpressBackendWithDB/
├── client/    # React frontend
├── server/    # Express backend
```

---

## Prerequisites

- Node.js (v16+ recommended)
- npm (comes with Node.js)
- MySQL (for user authentication and data storage)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/MedilinkReactApp.git
cd ReactFrontendExpressBackendWithDB
```

---

### 2. Setup the Backend (Server)

```bash
cd server
npm install
```

- Create a `.env` file in the `server` folder with your environment variables (e.g., database credentials, JWT secret).
- Make sure your MySQL server is running and the required tables are created.

**Start the backend server:**

```bash
npm run dev
# or
npm start
```

The backend will run on [http://localhost:5000](http://localhost:5000).

---

### 3. Setup the Frontend (Client)

```bash
cd ../client
npm install
```

**Start the frontend development server:**

```bash
npm start
```

The frontend will run on [http://localhost:3000](http://localhost:3000).

---

## API Endpoints

- **User Authentication:**  
  `POST /api/users/register`  
  `POST /api/users/login`  
  `POST /api/users/forgot-password`

- **Service Data:**  
  `GET /api/services`

---

## Environment Variables

Create a `.env` file in the `server` directory with the following (example):

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=medilinkdb
SECRET_KEY=your_jwt_secret
```

---

## About

MedilinkReactApp is a demo medical portal for booking appointments, browsing services, and reading health blogs.  
It is built with React, Express, and MySQL, and demonstrates full-stack development with authentication and RESTful APIs.

---

## License

This project is licensed under the ISC License.
