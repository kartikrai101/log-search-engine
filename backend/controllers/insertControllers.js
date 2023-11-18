const express = require('express');
const Logs = require('../models/logModel');
const Metadata = require('../models/metadataModel');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

exports.insertController = async (req, res) => {
    const data = req.body;

    const metadata_id = uuidv4();
    const log_id = uuidv4();

    const metadata = {
        metadata_id,
        parentResourceId: data.metadata.parentResourceId
    }
    const logData = {
        log_id,
        level: data.level,
        message: data.message,
        resourceId: data.resourceId,
        timestamp: data.timestamp,
        traceId: data.traceId,
        spanId: data.spanId,
        commit: data.commit,
        metadata_id: metadata_id 
    }

    // pushing this data in the PostgreSQL database
    const meta_data = await Metadata.create(metadata);
    const log = await Logs.create(logData);

    // here goes the code to push the data into the elasticsearch database

    res.send(data);
}