// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});
app.get('/about/*', function(req, res) {
    res.render('pages/404');
});
/*
app.get('/weather', (req, res) => {
    res.render('pages/weather')
})
*/
app.get('/weather', (req, res) => {
    if (req.query.gender === 'female') {
        res.render('pages/weather')
    }
    else res.render('pages/404')
})
app.get('/products', (req, res) => {
    
    
    console.log(req.query)
    res.send({products:[]})
})
app.listen(8080);
console.log('8080 is the magic port');
