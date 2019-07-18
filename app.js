var createError = require('http-errors');
var mysql = require('mysql');
var session = require('express-session');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('connect-flash');
var webpush=require('web-push');

//Client
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var profileRouter = require('./routes/profile');
var hoatdongRouter = require('./routes/hoatdong');
var chitiethoatdongRouter = require('./routes/chitiethoatdong');
var chuyensinhhoatdoanRouter = require('./routes/chuyensinhhoatdoan');
var thamgiahsvRouter = require('./routes/thamgiahsv');
//Admin
var adminRouter = require('./routes/admin/admin');
var adminsinhvienRouter = require('./routes/admin/sinhvien');
var adminchuyendoanRouter = require('./routes/admin/chuyendoan');
var adminhoatdongRouter = require('./routes/admin/hoatdong');
var taikhoanRouter = require('./routes/admin/taikhoan');
var app = express();


//connect databse
//const db = mysql.createConnection({
  //host: 'localhost',
  //user: 'root',
 // password: '123',
  //database: 'SocialHub'
//});

// connect to database
//db.connect((err) => {
  //if (err) {
  //  throw err;
  //}
  //console.log('Connected to database');
//});
//global.db = db;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/profile', profileRouter);
app.use('/hoatdong', hoatdongRouter);
app.use('/chitiethoatdong', chitiethoatdongRouter);
app.use('/chuyensinhhoatdoan', chuyensinhhoatdoanRouter);
app.use('/thamgiahsv', thamgiahsvRouter);
//admin
app.use('/admin', adminRouter);
app.use('/admin/sinhvien', adminsinhvienRouter);
app.use('/admin/chuyendoan', adminchuyendoanRouter);
app.use('/admin/hoatdong', adminhoatdongRouter);
app.use('/admin/taikhoan', taikhoanRouter);
// configure fileupload
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// Subscribe Route
app.post("/subscribe", (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;

  // Send 201 - resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({ title: "Push Test" });

  // Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.setHeader('Content-Type', 'text/plain');
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
