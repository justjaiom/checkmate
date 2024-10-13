const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const checkRoute = require('./routes/check');

dotenv.config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || 3001;

// MongoDB Connection
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', checkRoute);

// Start Server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
