const {Sequelize, DataTypes}  = require('sequelize');
const sequelize = require('../database/connection');

const Metadata = sequelize.define('metadata', {
    metadata_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    parentResourceId: {
        type: DataTypes.STRING,
    }
}, {
    freezeTableName: true
});

Metadata.sync({alter: true})
module.exports = Metadata;