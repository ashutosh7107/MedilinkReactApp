# MedilinkReactApp

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
├── package.json  # Root scripts for running both servers
```

---

## Prerequisites

- Node.js (v16+ recommended)
- npm (comes with Node.js)
- MySQL (for user authentication and data storage)
- Docker & Docker Compose (optional, for containerized setup)

---

## Getting Started (Without Docker)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/MedilinkReactApp.git
cd ReactFrontendExpressBackendWithDB
```

---

### 2. Install Dependencies

Install all dependencies for both client and server with a single command from the root folder:

```bash
npm install
```

This will install root dependencies (like `concurrently`) and also run `npm install` in both `client` and `server` folders if you set up [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) or run it manually in each folder if not.

---

### 3. Start the Application (Frontend & Backend Together)

From the root folder, run:

```bash
npm run dev
```

This will:

- Start the Express backend server (on [http://localhost:5000](http://localhost:5000))
- Start the React frontend development server (on [http://localhost:3000](http://localhost:3000))

Both servers will run concurrently in your terminal.

---

## Running with Docker

You can also run the entire application using Docker and Docker Compose.

### 1. Make sure Docker is installed

Install Docker from [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)  
(Ensure Docker Desktop is running before executing the next steps.)

### 2. Build and start containers

From the **root directory** of the project, run:

```bash
docker compose up --build
```

**This command will automatically:**

- Build the React client image
- Build the Express server image
- Start both containers
- Start a MySQL database container (as configured in `docker-compose.yml`)
- Connect all services together so they work out of the box

Open your browser at [http://localhost:3000](http://localhost:3000) to view the app.

### 3. Stopping the containers

To stop all running containers, press `Ctrl+C` in the terminal where Docker is running, then run:

```bash
docker compose down
```

---

## Docker Installation (with Colima on Mac)

If you are on a Mac and prefer not to use Docker Desktop, you can use [Colima](https://github.com/abiosoft/colima) as a lightweight Docker alternative.

### Steps to install Docker and Colima:

1. Install Docker:
   ```bash
   brew install docker
   ```
2. Install Docker Compose:
   ```bash
   brew install docker-compose
   ```
3. Install Colima:

   ```bash
   brew install colima
   ```

4. Start Colima:

   ```bash
   colima start
   ```

5. To stop Colima:
   ```bash
   colima stop
   ```

Once Colima is running, you can use Docker commands as usual, for example:

```bash
docker ps
```

---

## API Endpoints

- **User Authentication:**  
  `POST /api/users/register`  
  `POST /api/users/login`  
  `POST /api/users/forgot-password`

- **Service Data:**  
  `GET /api/services`

---

## About

MedilinkReactApp is a demo medical portal for booking appointments, browsing services, and reading health blogs.  
It is built with React, Express, and MySQL, and demonstrates full-stack development with authentication and RESTful APIs.

---

## License

This project is licensed under the ISC License.
