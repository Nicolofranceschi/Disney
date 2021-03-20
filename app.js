const express = require('express');
const path = require('path');
const logger = require('morgan');
const helmet = require('helmet');
const { connect } = require('mongoose');
require('dotenv').config();

const dataRouter = require('./server/routes/dataRouter');
const { NOT_FOUND } = require('./server/utility/httpStatusCodes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

app.use('/api/data', dataRouter);

app.use((_, res) => res.sendStatus(NOT_FOUND));

connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => console.log('DB Connected'))
.catch(err => console.error(err));

module.exports = app;
