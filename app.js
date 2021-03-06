require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express'), swaggerDocument = require('./swagger.json');

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});

const productsRouter = require('./routes/products');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/products', productsRouter);

module.exports = app;


