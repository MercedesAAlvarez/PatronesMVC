const express = require('express');
const router = express.Router();
const {jom,abaut} = require('../controllers/mainController') /* en esta variable se declaran el home y about */

router.get('/',jom);
router.get('/about',abaut)

module.exports = router;