# Calculator Application

This project is a simple calculator application with a Node.js backend and a React.js frontend. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Dockerized Setup

This project uses Docker Compose to run both the backend and frontend as separate containers. Each service has its own Dockerfile.

### Quick Start with Docker Compose

1. Make sure you have [Docker](https://www.docker.com/products/docker-desktop) installed.
2. In the project root (`calculator-app`), run:
   ```
   docker-compose up --build
   ```
3. The backend will be available at [http://localhost:5000](http://localhost:5000) and the frontend at [http://localhost:3000](http://localhost:3000).

### Restart Policy

Containers are configured with a restart policy (`restart: unless-stopped`) in `docker-compose.yml`. This ensures that containers will automatically restart if stopped or killed, unless explicitly stopped by the user.

## Project Structure

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

## Getting Started (Without Docker)

To run the application manually:

1. **Backend Setup**
   - Navigate to the backend directory and install dependencies:
     ```
     cd backend
     npm install
     ```
   - Start the backend server:
     ```
     npm start
     ```

2. **Frontend Setup**
   - Open a new terminal, navigate to the frontend directory, and install dependencies:
     ```
     cd frontend
     npm install
     ```
   - Start the React application:
     ```
     npm start
     ```

## Accessing the Application

- The backend will typically run on [http://localhost:5000](http://localhost:5000).
- The frontend will typically run on [http://localhost:3000](http://localhost:3000).

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- User-friendly interface for input and output.

## Technologies Used

- Node.js
- Express.js (for the backend)
- React.js (for the frontend)

## Starting nginx server

\nginx-1.26.3>start nginx
\nginx-1.26.3>taskkill /f /im nginx.exe
\nginx-1.26.3>start nginx
\nginx-1.26.3>nginx -s reload

## Exposing the App Publicly

To expose your local app to the internet, you can use [ngrok](https://ngrok.com/). Example command:
```
ngrok http --url=tight-internally-moccasin.ngrok-free.app 80
```