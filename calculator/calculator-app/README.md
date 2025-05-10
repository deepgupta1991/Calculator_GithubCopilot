# Calculator Application

This project is a simple calculator application with a Node.js backend and a React.js frontend. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

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
│   └── README.md
```

## Getting Started

To run the application, follow these steps:

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