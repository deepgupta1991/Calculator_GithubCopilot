const express = require('express');
const router = express.Router();
const CalculatorController = require('../controllers/calculatorController');

const calculatorController = new CalculatorController();

// New route for /calculate
router.post('/calculate', calculatorController.calculate);

module.exports = router;