# Calculator Application

A simple calculator application with a **Node.js** backend and a **React.js** frontend. It allows users to perform basic arithmetic operations: addition, subtraction, multiplication, and division.

---

## 🚀 Dockerized Setup

This project uses **Docker Compose** to run both the backend and frontend as separate containers. Each service has its own Dockerfile.

### Quick Start with Docker Compose

1. **Install [Docker Desktop](https://www.docker.com/products/docker-desktop)** if you haven't already.
2. In the project root (`calculator-app`), run:
   ```sh
   docker-compose up --build
   ```
3. Access the apps:
   - Backend: [http://localhost:5000](http://localhost:5000)
   - Frontend: [http://localhost:3000](http://localhost:3000)

### Restart Policy

Containers are configured with a restart policy (`restart: unless-stopped`) in `docker-compose.yml`. This ensures containers will automatically restart if stopped or killed, unless explicitly stopped by the user.

---

## 📁 Project Structure

```
calculator-app
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── routes
│   │   │   └── calculator.js
│   │   └── controllers
│   │       └── calculatorController.js
│   ├── package.json
│   ├── Dockerfile
│   └── README.md
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── App.js
│   │   ├── components
│   │   │   └── Calculator.js
│   │   └── index.js
│   ├── package.json
│   ├── Dockerfile
│   └── README.md
├── docker-compose.yml
└── README.md
```

---

## 🛠️ Getting Started (Without Docker)

### 1. Backend Setup

```sh
cd backend
npm install
npm start
```

### 2. Frontend Setup

Open a new terminal:

```sh
cd frontend
npm install
npm start
```

---

## 🌐 Accessing the Application

- **Backend:** [http://localhost:5000](http://localhost:5000)
- **Frontend:** [http://localhost:3000](http://localhost:3000)

---

## ✨ Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division
- User-friendly interface for input and output

---

## 🧰 Technologies Used

- **Node.js**
- **Express.js** (backend)
- **React.js** (frontend)

---

## 🖥️ Useful Commands

### nginx Server

If you use nginx for reverse proxy or static serving, here are some useful commands:

```sh
# Start nginx
start nginx

# Stop nginx
taskkill /f /im nginx.exe

# Restart nginx
start nginx

# Reload configuration
nginx -s reload
```

### PM2 Process Manager

For managing your Node.js backend with PM2:

```sh
# Start the app with 2 instances and a custom name
pm2 start app.js -i 2 --name express-app-calculator

# Stop all PM2 processes
pm2 kill

# Check PM2 process status
pm2 status
```

---

## 🌍 Exposing the App Publicly

To expose your local app to the internet, you can use [ngrok](https://ngrok.com/):

```sh
ngrok http --url=tight-internally-moccasin.ngrok-free.app 80
```