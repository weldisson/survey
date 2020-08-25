const evaluationController = require('../controllers/evaluationController');
const express = require('express');
const app = express();

app.get('/evaluation', evaluationController.show);
app.post('/evaluation', evaluationController.create);

module.exports = app;
