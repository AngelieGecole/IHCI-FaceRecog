const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const userRoute = require('./src/routes/userRoute'); // Import user routes

dotenv.config();
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.use('/api/users', userRoute); // Link userRoutes to /api/users

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
