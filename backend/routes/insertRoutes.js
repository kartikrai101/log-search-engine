const express = require('express');
const router = express.Router();
const {insertController}  = require('../controllers/insertControllers')

router.route('/new').post(insertController);

module.exports = router;