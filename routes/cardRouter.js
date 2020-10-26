var express = require('express');
var router = express.Router();
const controller = require('./../controller/cardController')

/* GET users listing. */

router.get('/', controller.getAllCard);

router.get('/board=:idBoard', controller.getCardOfBoard);

module.exports = router;
