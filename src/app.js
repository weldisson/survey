require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index');

const port = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

try {
    (async function() {
        await app.listen(port, () => {
            console.log('App is running in port:' + port);
        });
    }());
    
} catch (error) {
    throw Error(error);
}
