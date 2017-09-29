/**
 * Created by mayankrd on 9/29/17.
 * Entry point the express based server
 * Port: 3000
 * CORS Allowed
 */
const express = require('express')
const app = express()
const elSearch = require('./elastic-search/search_all.js');

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get('/', function (req, res) {
    res.send('Server running!')
});

app.get('/:q', function (req, res) {

    elSearch.searchAll(req.params.q)
        .then(results => {
        res.send(results.hits.hits);
    })
        .catch(console.error);
});

app.listen(3000, function () {
    console.log('Tweet Search app listening on port 3000!')
});


