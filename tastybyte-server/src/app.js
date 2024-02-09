const express = require('express');
const applyMiddleWare = require('./middlewares/applyMiddleWare');
const connectDB = require('./db/connectDB');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || '5000';

applyMiddleWare(app);

app.get('/health', (req, res) => {
    res.send('Welcome to TastyByte Server.')
})

// Handle Error
app.all('*', (req, res, next) => {
    const error = new Error(`The Requestend URL is invalid ${req.url}`)
    error.status = 404;
    next(error)
})

// Handle Error
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
});

const main = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

main();