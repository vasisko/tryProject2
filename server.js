var express = require("express");
var path = require('path');
var db = require("./models");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var expressValidator = require ('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var app = express();

var PORT = process.env.PORT || 3000;



// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave:true
}));

//Passport initialization
app.use(passport.initialize());
app.use(passport.session());

//ExpresssValidator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.')
    , root = namespace.shift()
    , formParam = root;
    
    while(namespace.length) {
      formParam+= '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg : msg,
      value: value
    };
  }
}));

//Connect Flash
app.use(flash());
//Global Vars
app.use(function (req, res, next){
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


// Set Handlebars.
var exphbs = require("express-handlebars");
//app.set('views', path.join(__dirname, 'views'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require('./routes/index');
var users = require('./routes/users');
var resources = require('./routes/resources');
//var apiroutes = require('./routes/api-routes');
var htmlroutes = require('./routes/html-routes');
var dashboardroutes = require('./routes/dashboard-routes');

app.use("/", routes);
app.use("/users", users);
// app.use("/resources", resources)

app.use("/", resources);
//app.use("/api-routes", apiroutes);
app.use("/html-routes", htmlroutes);
app.use("/dashboard-routes", dashboardroutes);





// Start our server so that it can begin listening to client requests.
db.sequelize.sync({force: false}).then(function(){
app.listen(PORT, function() {
 // Log (server-side) when our server has started
 console.log("Server listening on: http://localhost:" + PORT);
});
});