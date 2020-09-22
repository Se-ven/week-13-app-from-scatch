const createError = require('http-errors');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { logger, morgan } = require('morgan');
const { startDatabase } = require('./database/clear-common');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const testAPIRouter = require('./routes/testAPI');

// Define express app
const app = express();

// Enhance security
app.use(helmet());

// Body Parser module to render JSON into JS objects. 
// adds `.body` to the requests so our handler functions
// can work with that incoming data.
app.use(bodyParser.json());

// Enable CORS for all requests *(not a secure practice)*
app.use(cors());

// Morgan for HTTP request logging
app.use(morgan('combined'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
