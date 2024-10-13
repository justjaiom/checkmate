const { MongoClient } = require('mongodb');
require('dotenv').config();  // Load environment variables

const client = new MongoClient(process.env.MONGODB_URI);

async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
        return client.db(process.env.DB_NAME);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);  // Exit the process if connection fails
    }
}

module.exports = connectDB;
