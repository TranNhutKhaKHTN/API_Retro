var express = require('express');
var router = express.Router();
const controller = require('./../controller/BoardController')

/* GET users listing. */

router.get('/user=:idUser', controller.getBoardOfUser);

router.get('/', controller.getAllBoard);

router.post('/update', controller.updateBoard)

router.post('/create', controller.createBoard)

router.post('/delete', controller.deleteBoard)


module.exports = router;
