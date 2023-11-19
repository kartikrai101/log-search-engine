const express = require('express');
const app = express();
const router = express.Router();
const {searchController} = require('../controllers/searchController');

router.route('/:index').post(searchController);

module.exports = router;