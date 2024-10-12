const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const misinformationRoutes = require('./routes/misinformation');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', misinformationRoutes);

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
