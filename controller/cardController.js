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
  Card.getCardOfBoard(userBoard)
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

exports.deleteCard = (req, res) => {
  const id = req.body
  // console.log(req.body);
  Card.deleteCard(id).then(data => {
    res.status(200)
    res.send({
      status: 200,
      mess: "success"
    })
  })
    .catch(error => {
      res.send({
        status: 500,
        mess: "error"
      })
    })
}

exports.updateCard = (req, res) => {
  const card = req.body;
  const condition = { _id: card._id }
  Card.updateCard(condition, card)
    .then(data => {
      res.send({
        status: 200,
        data: "update success"
      })
    })
    .catch(error => {
      res.send({
        status: 500,
        data: "update fail"
      })
    })
}

