const Card = require('./../model/Card');

exports.getAllCard = async (req, res) => {
  Card.getBoard()
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

exports.getCardOfBoard = async (req, res) => {
  const userBoard = req.params.idBoard
  Card.getBoardOfUser(userBoard)
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