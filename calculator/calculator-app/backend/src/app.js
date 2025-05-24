const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const calculatorRoutes = require('./routes/calculator');

const app = express();

// Enable CORS
app.use(cors());

app.use(bodyParser.json());
app.use('/', calculatorRoutes);

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});