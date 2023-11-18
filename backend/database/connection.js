const dotenv = require('dotenv');
const {Sequelize} = require('sequelize');
dotenv.config();

const postgres = {
    options: {
        username: 'postgres',
        host: 'localhost',
        database: 'logsearchengine',
        password: "Kartik@2002",
        port: 5432,
        dialect: 'postgres',
        logging: false // to prevent logging on the console all the queries that are being performed
    },
    client: null,
}

let sequelize = new Sequelize(postgres.options);

module.exports = sequelize;