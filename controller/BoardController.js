const Board = require('./../model/Board');
//5f9679c4ac37a820ad8b8b83

exports.getAllBoard = (req, res) => {
  Board.getBoard()
    .then(data => {
      res.send({
        status: 200,
        data: data
      })
    })
    .catch(() => {
      res.send({
        status: 200,
        data: data
      })
    })
}

exports.getBoardOfUser = (req, res) => {
  const userID = req.params.idUser
  Board.getBoardOfUser(userID)
    .then(data => {
      res.send({
        status: 200,
        data: data
      })
    })
    .catch(() => {
      res.send({
        status: 200,
        data: "error"
      })
    })
}

exports.updateBoard = (req, res) => {
  const board = req.body
  console.log(board);
  Board.updateBoard(board)
    .then(() => {
      res.send({
        status: 200,
        data: board
      })
    })
    .catch(() => {
      res.send({
        status: 500,
        data: "error"
      })
    })
}

exports.createBoard = (req, res) => {
  const board = req.body;
  console.log(board);
  Board.createBoard(board)
    .then((data) => {
      res.send({
        status: 200,
        data: data
      })
    })
    .catch(error => {
      res.send({
        status: 500,
        data: error
      })
    })
}

exports.deleteBoard = (req, res) => {
  // console.log(req.body);
  const id = req.body
  console.log(id);
  Board.deleteBoard(id)
    .then(() => {
      res.send({
        status: 200,
        data: "success"
      })
    })
    .catch(() => {
      res.send({
        status: 500,
        data: "error"
      })
    })
}