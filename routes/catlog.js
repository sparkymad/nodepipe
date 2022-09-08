const express = require('express');
const CatControl = require('../controllers/catlog');

const router = express.Router();

router.get('/log', CatControl.getCat);

module.exports = router;