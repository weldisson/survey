const indexController = require('../controllers/index.controller');
const express = require('express');
const app = express();

app.get('/evaluation', indexController.show);
app.post('/evaluation', indexController.create);

module.exports = app;
