exports.searchAll = function (queryStr) {
    'use strict';
    const elasticsearch = require('elasticsearch');

    const esClient = new elasticsearch.Client({
        host: '127.0.0.1:9200',
        log: 'error'
    });

    let body = {
        size: 20,
        from: 0,
        query: {
            match: {
                text: {
                    query: queryStr
                }
            }
        }
    };

    const search = function search(index, body) {
        return esClient.search({index: index, body: body});
    };

    return search('library', body);
};
