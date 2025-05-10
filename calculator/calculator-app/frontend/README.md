# Calculator Application

This project is a simple calculator application with a Node.js backend and a React.js frontend.

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
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Running the Application

1. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

2. Start the backend server:
   ```
   npm start
   ```

3. Open a new terminal, navigate to the frontend directory, and install dependencies:
   ```
   cd frontend
   npm install
   ```

4. Start the React application:
   ```
   npm start
   ```

### Accessing the Application

- The backend will typically run on [http://localhost:5000](http://localhost:5000)
- The frontend will typically run on [http://localhost:3000](http://localhost:3000)

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- User-friendly interface for input and output.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features.