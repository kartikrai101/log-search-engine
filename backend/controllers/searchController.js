const express = require('express');
require('dotenv').config();
const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
    host: 'http://localhost:9200'
})

const filters = [
    "Full-Text search", "Level", "Message", "ResourceId", "Timestamp", "TraceId", "SpanId", "Commit", "ParentResourceId"
]

exports.searchController = async (req, res) => {
    //const body = req.body;
    const indexName = req.params.index;
    const queryString = req.body.queryString;
    const filters = req.body.filters;

    try {
        // Search for documents containing the specified text
        let overallResult = [];
        if(filters.length === 0){
                const body = await client.search({
                    index: indexName,
                    body: {
                        size: 10000,
                        query: {
                            multi_match: {
                                query: queryString,                          
                                fields: ["level", "message", "resourceId", "traceId", "spanId", "commit"]
                            },
                        },
                    },
                });
                const searchResults = body.hits.hits.map(hit => hit._source);
                overallResult = [...searchResults]
        }else{
            // filters k saath khelo    
            for(let filter of filters){
                if(filter === 1){
                    const body = await client.search({
                        index: indexName,
                        body: {
                            size: 10000,
                            query: {
                                multi_match: {
                                    query: queryString,                          
                                    fields: ["level", "message", "resourceId", "traceId", "spanId", "commit"]
                                },
                            },
                        },
                    });
                    const searchResults = body.hits.hits.map(hit => hit._source);
                    overallResult = [...searchResults]
                    //console.log("Complete search")
                }
                if(filter === 2){
                    const body = await client.search({
                        index: indexName,
                        body: {
                            size: 10000,
                            query: {
                                match: {
                                    level: queryString
                                },
                            },
                        },
                    });
                    const searchResults = body.hits.hits.map(hit => hit._source);
                    overallResult = [...searchResults]
                    //console.log("Level search")
                }
                if(filter === 3){
                    const body = await client.search({
                        index: indexName,
                        body: {
                            size: 10000,
                            query: {
                                match: {
                                    message: queryString
                                },
                            },
                        },
                    });
                    const searchResults = body.hits.hits.map(hit => hit._source);
                    overallResult = [...searchResults]
                    //console.log("Message search")
                }
                if(filter === 4){
                    const body = await client.search({
                        index: indexName,
                        body: {
                            size: 10000,
                            query: {
                                match: {
                                    resourceId: queryString
                                },
                            },
                        },
                    });
                    const searchResults = body.hits.hits.map(hit => hit._source);
                    overallResult = [...searchResults]
                    //console.log("Resource search")
                }
                if(filter === 6){
                    const body = await client.search({
                        index: indexName,
                        body: {
                            size: 10000,
                            query: {
                                match: {
                                    traceId: queryString
                                },
                            },
                        },
                    });
                    const searchResults = body.hits.hits.map(hit => hit._source);
                    overallResult = [...searchResults]
                    //console.log("TraceId search")
                }
                if(filter === 7){
                    const body = await client.search({
                        index: indexName,
                        body: {
                            size: 10000,
                            query: {
                                match: {
                                    spanId: queryString
                                },
                            },
                        },
                    });
                    const searchResults = body.hits.hits.map(hit => hit._source);
                    overallResult = [...searchResults]
                    //console.log("SpanId search")
                }
                if(filter === 8){
                    const body = await client.search({
                        index: indexName,
                        body: {
                            size: 10000,
                            query: {
                                match: {
                                    commit: queryString
                                },
                            },
                        },
                    });
                    const searchResults = body.hits.hits.map(hit => hit._source);
                    overallResult = [...searchResults]
                    //console.log("Commit search")
                }
                // if(filter === "ParentResourceId"){
                //     const body = await client.search({
                //         index: indexName,
                //         body: {
                //             size: 10000,
                //             query: {
                //                 match: {
                //                     level: queryString
                //                 },
                //             },
                //         },
                //     });
                //     const searchResults = body.hits.hits.map(hit => hit._source);
                //     overallResult = [...searchResults]
                // }
            }
        }
    
        // Extract and display the search results
        //const searchResults = body.hits.hits.map(hit => hit._source);
        //console.log('Search Results:', searchResults);
        res.send(overallResult)
      } catch (error) {
        console.error('Error:', error);
      }
}