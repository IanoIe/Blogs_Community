var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var loginRouter = require('./routes/loginRoutes'); 
var registerRouter = require('./routes/registarRoutes')


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/login', loginRouter);
app.use('/api/registar', registerRouter);


module.exports = app;
