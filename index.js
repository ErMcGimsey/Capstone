var express = require('express');
var app     = express();
var cors    = require('cors');
var dal     = require('./dal.js');
var admin   = require('./admin.js')
    



//used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());
admin.initializeApp

//create account
app.get('/account/create/:name/:email/:password', function (req, res) {
    //else create user
    dal.create(req.params.name, req.params.email, req.params.password).
        then((user) => {
            console.log(user);
            res.send(user);
        });
});

// login user


//all accounts
app.get('/account/all', function (req,res) {

    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
        });
});

// deposit
app.get('/account/all/test', function (req, res) {
    
    res.send('hello world')
});


// withdraw
app.get('/account/withdraw', function (req, res) {
    res.send({
        withdraw: req.params.withdraw
    });
});

// user balance
app.get('/account/balance', function (req, res) {
    res.send({
        balance: req.params.balance
    });
});

// user data
app.get('/account/data', function (req, res) {
    res.send({
        data: req.params.data
    });
});

/*var port = 3000
app.listen(port);
console.log('Running on port: ' + port);*/