// import env file script
require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

// Connecting the database
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(cors());
app.options('*', cors());

app.use(express.json());

// Make server listen to port 8000
app.listen(8000, () => {
    console.log(`Server Started at ${8000}`)
})

const user = require('./routes/user.router');
app.use('/users', user)

