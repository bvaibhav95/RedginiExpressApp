// node_modules require js
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var validator = require('express-validator');
var MongoStore = require('connect-mongo')(session);
var nodeMailer = require('nodemailer');
var cookieSession = require('cookie-session');
var passportConfig = require('./config/passport-config');
var keys = require('./config/keys');
//Custom require js
var index = require('./routes/generalRoutes');
var product = require('./routes/productRoutes');
var login = require('./routes/loginRoutes');
var profile = require('./routes/profileRoutes');
//========================================================================================
var app = express();
mongoose.connect(keys.mongodbDevlopment.dbURI);

// view engine setup
app.engine('.hbs', expressHbs({
  extname: '.hbs',
  partialsDir: path.join(__dirname, 'views/partials'),
  layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views',path.join(__dirname,'views'));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
//cookieSession - No need to use this, this stores on client side which is risky, but cookie 
//is encrypted using the key given...also avoids the unnecessary load on server and time to fetch 
//session from server
app.use(cookieSession({
  name : 'session',
  maxAge : 60 * 60 * 1000,
  keys : [keys.cookieSession.cookieKey]
}));

//express-session -
//Only use the express session...
// app.use(session({
//   secret: 'everyonehasasecret', 
//   resave: false, 
//   saveUninitialized: true,
//   store: new MongoStore({ mongooseConnection: mongoose.connection }),
//   cookie: {maxAge: 60 * 60 * 1000}
// }));
app.use(passport.initialize()); // initializing the passporrt int mongodb session
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(function(req, res, next){
//   res.locals.session = req.session;
//   next();
// });

app.use('/', index);
app.use('/products', product);
app.use('/auth', login);
app.use('/profile', profile);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
