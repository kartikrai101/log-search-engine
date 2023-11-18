const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const sequelize = require('./database/connection');

app.use(bodyParser.json());

const insert = require('./routes/insertRoutes');

app.use('/api/insert', insert);

app.listen(8000, () => {
    console.log("Listening to port 8000")
})

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
}catch (error) {
    console.error('Unable to connect to the database:', error);
} 