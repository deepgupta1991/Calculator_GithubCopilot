import React, { useState } from 'react';
import API_BASE_URL from '../api'; // Import the API base URL

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);
    const [operation, setOperation] = useState('');

    const handleCalculation = async () => {
            const response = await fetch(`${API_BASE_URL}/calculate`, {
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
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h1>Calculator</h1>
                            <input
                                className="form-control mb-2"
                                type="number"
                                value={num1}
                                onChange={(e) => setNum1(e.target.value)}
                                placeholder="First Number"
                            />
                            <input
                                className="form-control mb-2"
                                type="number"
                                value={num2}
                                onChange={(e) => setNum2(e.target.value)}
                                placeholder="Second Number"
                            />
                            <select className="form-select mb-2" onChange={(e) => setOperation(e.target.value)}>
                                <option value="">Select Operation</option>
                                <option value="add">Add</option>
                                <option value="subtract">Subtract</option>
                                <option value="multiply">Multiply</option>
                                <option value="divide">Divide</option>
                            </select>
                            <button className="btn btn-primary w-100 mb-2" onClick={handleCalculation}>Calculate</button>
                            {result !== null && <h2>Result: {result}</h2>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;