exports.searchAll = function (queryStr) {
    'use strict';
    const elasticsearch = require('elasticsearch');

    const esClient = new elasticsearch.Client({
        host: '127.0.0.1:9200',
        log: 'error'
    });

    let body = {
        size: 1000,
        from: 0,
        query: {
            multi_match : {
                query:    queryStr,
                fields: [ "text", "user_id", "created_at"]
            }
        }
    };

    const search = function search(index, body) {
        return esClient.search({index: index, body: body});
    };

    return search('library', body);
};
