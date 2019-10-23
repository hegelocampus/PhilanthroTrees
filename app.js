const express = require('express');
const createError = require('http-errors');
const path = require('path');
const sassMiddleware = require('node-sass-middleware');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/api/users');
const projectsRouter = require('./routes/api/projects');
const communitiesRouter = require('./routes/api/communities');
const tasksRouter = require('./routes/api/tasks');

const app = express();
app.use(passport.initialize());
require('./config/passport')(passport);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(sassMiddleware({
  src: path.join(__dirname + '/sass'),
  dest: path.join(__dirname + '/frontend/public'),
  debug: true,
  outputStyle: 'compressed'
}));

// view engine setup
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
} else {
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/', indexRouter);
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/api/users', usersRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/communities', communitiesRouter);
app.use('/api/tasks', tasksRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

