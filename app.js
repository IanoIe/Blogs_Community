var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var loginRouter = require('./routes/loginRoutes'); 

var blogsRouter = require('./routes/blogsRoutes');

var galeriasRouter = require('./routes/galeriasRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/api/auth', loginRouter);

app.use('/api/blogs', blogsRouter);

app.use('/api/galerias', galeriasRouter);


module.exports = app;
