//Necessary imports for the app.
var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

//Create the app
var app = express();
var port = process.env.PORT||5000;

//var configDB = require('./config/database.js');

//App configuration
//mongoose.connect(configDB.url);
//require('./config/passport.js')(passport);

//Log requests to console
//app.use(morgan('dev'));
//Must be able to read cookies
//app.use(cookieParser());
//Extract info from html forms
//app.use(bodyParser());

var routes = require('./routes/routes')

//app.set('views', __dirname + '/views');
app.set('view engine','ejs');

//Configure passport
//app.use(session({ secret : 'secret' }));
//app.use(passport.initialize());
//app.use(passport.session()); //Persistent login sessions
//app.use(flash()); //Flash messages in session

app.use(express.static(__dirname +'/public'));

app.use('/',routes);
//require('./routes/routes.js')(app,passport);
app.listen(port);


