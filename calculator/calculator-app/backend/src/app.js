const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const calculatorRoutes = require('./routes/calculator');
const rateLimit = require('express-rate-limit');

const app = express();

// Enable CORS
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3100'], // add your frontend URL(s)
  methods: ['GET', 'POST'],
}));

app.use(bodyParser.json());
app.use('/', calculatorRoutes);

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 60, // limit each IP to 60 requests per windowMs
});
app.use(limiter);

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});