//Dependencies===========================================
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var exphbs = require('express-handlebars');
var db = require('./models');
var app = express();

//Configure the app======================================
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(process.cwd() + '/public'));


//Database connection====================================
var databaseUrl = 'userDB';
var collections = ['users'];

db.sequelize.sync({force: true}).then(function() {
var routes = require('./config/controller.js');

app.use('/', routes);


//MAKE THE CONNECTION=====================================
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log('Listening on: ' + PORT);
});

//console.log(db.Users)



});


