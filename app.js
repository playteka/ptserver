var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var register = require('./routes/register.js');
var login = require('./routes/login.js');
var logout = require('./routes/logout.js');
var subscriber = require('./routes/subscriber.js');
var project = require('./routes/project.js');
var playduinoconfig = require('./routes/playduinoconfig.js');
var playduino = require('./routes/playduino.js');
var heartbeat = require('./routes/heartbeat.js');

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/playteka', function(err) {
                          if(err) {
                          console.log('mongodb connection error', err);
                          } else {
                          console.log('mongodb playteka connection successful');
                          }
                          });


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(session({secret: 'zhouhuanyu', cookie: { maxAge: 3600*1000 }, rolling:true}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/register', register);
app.use('/login', login);
app.use('/logout', logout);
app.use('/subscriber', subscriber);
app.use('/project', project);
app.use('/playduinoconfig', playduinoconfig);
app.use('/blockly/app/playduino', playduino);
app.use('/heartbeat', heartbeat);
//app.get('/users', users.list);
//app.post('/register', users.register);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
        });

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                       message: err.message,
                       error: err
                       });
            });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
                   message: err.message,
                   error: {}
                   });
        });


module.exports = app;

