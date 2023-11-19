const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const sequelize = require('./database/connection');
const cors = require('cors')


app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}))

const insert = require('./routes/insertRoutes');
const get = require('./routes/getRoutes');
const search = require('./routes/searchRoutes');

app.use('/api/insert', insert);
app.use('/api/get', get);
app.use('/api/search', search);

app.listen(8000, () => {
    console.log("Listening to port 8000")
})

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
}catch (error) {
    console.error('Unable to connect to the database:', error);
} 