var express = require('express');
var request = require('request');
var routing = express.Router();

//any routing
routing.get('/', function (req, res, next) {
    res.redirect('/myrepo/login');
})

//routing login
routing.get('/login', function (req, res, next) {
    res.sendFile(path + '/public/views/login.html');
})

//routing login
routing.get('/mysnippets', function (req, res, next) {
    res.sendFile(path + '/public/views/mysnippets.html');
})
//routing login
routing.get('/newsnippet', function (req, res, next) {
    res.sendFile(path + '/public/views/newsnippet.html');
})



//Fetch Method data
routing.get('/usersData', function (req, res, next) {
    const fs = require('fs');
    let rawdata = fs.readFileSync(path + '/public/json/users.json');
    let proData = JSON.parse(rawdata);
    res.send(proData);
})


routing.post('/usersData', function (req, res) {
    const fs = require('fs');
    fs.writeFile(path + '/public/json/users.json', JSON.stringify(req.body), function(err) {
        if(err) {
            return console.log(err);
        }            
    });
    res.send("file saved");
});

//Fetch Method data
routing.get('/myRepoReal', function (req, res, next) {
    const fs = require('fs');
    let rawdata = fs.readFileSync(path + '/public/json/repository.json');
    let proData = JSON.parse(rawdata);
    res.send(proData);
})


routing.post('/myRepoReal', function (req, res) {
    const fs = require('fs');
    fs.writeFile(path + '/public/json/repository.json', JSON.stringify(req.body), function(err) {
        if(err) {
            return console.log(err);
        }            
    });
    res.send("file saved");
});



module.exports = routing;