const express = require('express');
const router = express.Router();
const {getAllDocs} = require('../controllers/getControllers');

router.route('/getAll').get(getAllDocs);

module.exports = router;