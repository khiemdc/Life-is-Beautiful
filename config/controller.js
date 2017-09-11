// Dependencies ===========================================================

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var router = express.Router();
var request = require('request');

/*Obtains Athorization for API here
var authorize = {
    method: 'POST',
    url: 'https://....   ',
    headers: {
        'cache-control': 'no-cache',
        authorization: 'Basic Y2QyZGQyM2MtYmUwMy00OTk4LTg4NWItYjg0ZDY4ODg4ZjEyOmU4ZjcyZjUzLTRlMTMtNDYyNy04NDQ4LTBhYjQzNDVlYWYyMw=='
    }
}; */

//global variable to hold selected city
var city;
var cityId;

// Routes ===================================================================

router.get('/', function(req, res, next) {
    //request(authorize, function(error, response, body) {
    //    if (error) throw new Error(error);
        // console.log(body);
    //})
    res.render('index');
});

router.get('/city', function(req, res, body) {
    res.render('city');
});

router.get('/Newyork', function(req, res, body) {
    console.log(req.params);
    res.render('form');
});

router.get('/California', function(req, res, body) {
    res.render('form');
});

router.get('/Florida', function(req, res, body) {
    res.render('form');
});

router.get('/friends', function(req,res, body){
    res.render('friends');
});



router.post('/signin', function(req, res, body) {
    username = req.body.username;
    password = req.body.password;
    console.log(username);

})


router.get('/signup', function(req,res, body){
    res.render('signup');
});

module.exports = router;
