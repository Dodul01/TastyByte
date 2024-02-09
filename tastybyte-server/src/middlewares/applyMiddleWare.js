const express = require('express');
const cors = require('cors');
const app = express();

const applyMiddleWare = (app) => {
    app.use(cors());
    app.use(express.json());
}

module.exports = applyMiddleWare;