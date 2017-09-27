(function () {
    'use strict';

    const elasticsearch = require('elasticsearch');
    const esClient = new elasticsearch.Client({
        host: '127.0.0.1:9200',
        log: 'error'
    });

    const search = function search(index, body) {
        return esClient.search({index: index, body: body});
    };

    // only for testing purposes
    // all calls should be initiated through the module
    const test = function test() {
        let body = {
            size: 20,
            from: 0,
            query: {
                match: {
                    text: {
                        query: 'President'
                    }
                }
            }
        };

        console.log(`retrieving all documents (displaying ${body.size} at a time)...`);
        search('library', body)
            .then(results => {
            console.log(`found ${results.hits.total} items in ${results.took}ms`);
        console.log(`returned article titles:`);
        results.hits.hits.forEach((hit, index) => console.log(`${hit._source.text} ${hit._source.user_id}`));
    })
        .catch(console.error);
    };

    test();

    module.exports = {
        search
    };
} ());