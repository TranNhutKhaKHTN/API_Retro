const express = require('express');
const router = express.Router();
const controller = require('./../controller/UserController')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send([{ id: 1, name: "kha" }, { id: 2, name: "nhi" }]);
});

router.post('/logup', controller.createUser)

module.exports = router;
