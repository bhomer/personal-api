var express = require('express');

var app = express();

app.get('/name', function(req, res) {
    res.type('application/json');
    res.send({name: 'Benjamin Homer'})
});
app.get('/location', function(req, res) {
    res.type('application/json');
    res.send({location: 'Murray, UT'})
});
app.get('/hobbies', function(req, res) {
    res.type('application/json');
    res.send({hobbies: 'Sports, Exercise'})
});
app.get('/occupations', function(req, res) {
    res.type('application/json');
    res.send({occupations: 'SEO'})
});
app.get('/occupations/latest', function(req, res) {
    res.type('applicattion/json');
    res.send({latest: 'Web Developer'})
});

app.configure(function() {
    app.use(express.bodyParser());
    app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept');
        next();
    })
});
    
app.get('/', function(req, res) {
    res.type('application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify(messages));
});

app.get('/', function(req, res) {
    res.type('

//app.post('/', function(req, res) {
//    console.log(req.body);
//    messages.push(req.body);
//    res.setHeader('Access-Control-Allow-Origin', '*');
//    res.send(req.body);
//});




app.listen(7888);