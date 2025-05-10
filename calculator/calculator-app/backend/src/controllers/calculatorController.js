class CalculatorController {

    calculate(req, res) {
        const { num1, num2, operation } = req.body;

        if (isNaN(num1) || isNaN(num2)) {
            return res.status(400).json({ error: 'Invalid numbers provided' });
        }

        let result;
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    return res.status(400).json({ error: 'Division by zero is not allowed' });
                }
                result = num1 / num2;
                break;
            default:
                return res.status(400).json({ error: 'Invalid operation' });
        }

        res.json({ result });
    }
}

module.exports = CalculatorController;