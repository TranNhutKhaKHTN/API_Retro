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
        status: 500,
        data: "error"
      })
    })
}

exports.getCardOfBoard = async (req, res) => {
  const userBoard = req.params.idBoard
  Card.getBoardOfUser(userBoard)
    .then(data => {
      res.send({
        status: 200,
        data
      })
    })
    .catch(() => {
      res.send({
        status: 500,
        data: "error"
      })
    })
}

exports.createCard = async (req, res) => {
  const newCard = req.body;
  // console.log(newCard);
  Card.createNewCard(newCard)
    .then(data => {
      res.send({
        status: 200,
        data: data
      })
    })
    .catch(error => {
      res.send({
        status: 500,
        error: "error"
      })
    })
}