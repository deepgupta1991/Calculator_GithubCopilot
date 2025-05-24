import React, { useState } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);
    const [operation, setOperation] = useState('');

    const handleCalculation = async () => {
        const response = await fetch(`https://tight-internally-moccasin.ngrok-free.app/api/calculate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ num1: parseFloat(num1), num2: parseFloat(num2), operation }),
        });
        const data = await response.json();
        setResult(data.result);
    };

    return (
        <div>
            <h1>Calculator</h1>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="First Number"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Second Number"
            />
            <select onChange={(e) => setOperation(e.target.value)}>
                <option value="">Select Operation</option>
                <option value="add">Add</option>
                <option value="subtract">Subtract</option>
                <option value="multiply">Multiply</option>
                <option value="divide">Divide</option>
            </select>
            <button onClick={handleCalculation}>Calculate</button>
            {result !== null && <h2>Result: {result}</h2>}
        </div>
    );
};

export default Calculator;