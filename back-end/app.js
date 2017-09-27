/**
 * Created by mayankrd on 9/27/17.
 */
const express = require('express')
const app = express()

const elSearch = require('./elastic-search/search_all.js');

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/:q', function (req, res) {

    //console.log(elSearch.searchAll(req.params.q));

    //res.send(elSearch.searchAll(req.params.q));

    elSearch.searchAll(req.params.q)
        .then(results => {
        // console.log(`found ${results.hits.total} items in ${results.took}ms`);
        // console.log(`returned article titles:`);
        // results.hits.hits.forEach((hit, index) => {
        // console.log(`${hit._source.text} ${hit._source.user_id}`);
        // resArr.push({ "text": hit._source.text });
        res.send(results);
    })
        .catch(console.error);
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})


