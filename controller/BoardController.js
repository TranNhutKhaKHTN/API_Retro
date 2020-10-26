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