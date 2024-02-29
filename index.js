const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db/db');

require('dotenv').config();

connectToMongo();

const app = express();
const PORT = process.env.AUTH_PORT || 3001;

app.use(cors());
app.use(express.json());

// Use your auth routes
app.use('/api/auth', require('./routes/authRoutes'));

app.listen(PORT, () => {
  console.log(`Auth microservice started on http://localhost:${PORT}`);
});
