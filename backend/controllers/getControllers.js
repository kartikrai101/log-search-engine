const express = require('express');
const Logs = require('../models/logModel');
const Metadata = require('../models/metadataModel');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();
const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
    host: 'http://localhost:9200'
})

exports.getAllDocs = async (req,res) => {
    try {
        // Search for all documents in the specified index
        const body = await client.search({
          index: 'logs_index',
          body: {
            size: 10000,
            query: {
              match_all: {}, // Match all documents
            },
          },
        });
    
        // Extract and display the documents
        const documents = body.hits.hits.map(hit => hit._source);
        res.send(documents)
      } catch (error) {
        //console.error('Error:', error.meta.body.error);
        res.send('Error:', error)
      }
}