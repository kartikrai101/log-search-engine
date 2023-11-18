const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../database/connection');
const Metadata = require('./metadataModel');
const { v4: uuidv4 } = require('uuid');
// uuidv4();

const Log = sequelize.define('logs', {
    log_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    level: {
        type: DataTypes.STRING,
    },
    message: {
        type: DataTypes.TEXT,
    },
    resourceId: {
        type: DataTypes.STRING,
    },
    timestamp: {
        type: DataTypes.STRING
    },
    traceId: {
        type: DataTypes.STRING,
    },
    spanId: {
        type: DataTypes.STRING
    },
    commit: {
        type: DataTypes.STRING,
    },
    metadata_id: {
        type: DataTypes.STRING,
        references: {
            model: 'metadata', // referes to the referenced table name
            key: 'metadata_id' // refers to the column name of referenced table that is being assigned to as the foreign key in this table
        }
    }
}, {
    freezeTableName: true
});

Metadata.hasOne(Log);

Log.sync({alter: true})
module.exports = Log;