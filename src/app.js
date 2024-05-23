const express = require('express');
require('express-async-errors');

const path = require('path');
const logger = require('morgan');

const errorsMiddlewares = require('./errors/middlewares');
const perguntasRouter = require('./perguntas');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(perguntasRouter);

app.use(errorsMiddlewares.notFound);
app.use(errorsMiddlewares.printStackTrace);
app.use(errorsMiddlewares.catchAll);

module.exports = app;
