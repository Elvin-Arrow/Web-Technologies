var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose'); 
var cors = require('cors');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var teacherRouter = require('./routes/teacher'); 
var studentRouter = require('./routes/student'); 
var adminRouter = require('./routes/admin'); 
var headRouter = require('./routes/head'); 
var loginRouter = require('./routes/login');
var authRouter = require('./routes/auth')

const connection = mongoose.connect('mongodb://localhost:27017/lms', {useNewUrlParser:true, useUnifiedTopology: true}); 
connection.then((db)=>{
  console.log("Connected to DB successfully"); 
},(err)=>{
  console.err(err);
});

var app = express();

app.use(cors());

var passport = require('passport');
var authenticate = require('./authenticate');
app.use(passport.initialize(authenticate));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/admin', adminRouter); 
app.use('/student', studentRouter); 
app.use('/head', headRouter); 
app.use('/teacher', teacherRouter); 
app.use('/login', loginRouter);
//app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
