# Calculator Application Backend

This is the backend part of the Calculator application built with Node.js and Express.

## Getting Started

To get started with the backend, follow these steps:

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the backend server:**
   ```bash
   npm start
   ```

The backend server will run on `http://localhost:5000`.

## API Endpoints

The backend provides the following API endpoints for calculator operations:

- **POST /calculate/add**: Adds two numbers.
- **POST /calculate/subtract**: Subtracts the second number from the first.
- **POST /calculate/multiply**: Multiplies two numbers.
- **POST /calculate/divide**: Divides the first number by the second.

## Folder Structure

- `src/app.js`: Entry point of the backend application.
- `src/routes/calculator.js`: Defines routes for calculator operations.
- `src/controllers/calculatorController.js`: Contains logic for performing calculations.

## Technologies Used

- Node.js
- Express

## License

This project is licensed under the MIT License.