// const db = require('./../database/database')
const mongoose = require('mongoose')

CardSchema = new mongoose.Schema({
  idBoard: String,
  content: String,
  type: Number
})
const Card = mongoose.model("Card", BoardSchema, "Card")

const getAllCard = () => {
  const a = Card.find({})
  return a;
}
exports.getBoard = getAllCard;

const getCardOfBoard = (idBoard) => {
  const board = Card.find({ idBoard: idBoard })
  return board
}
exports.getBoardOfUser = getCardOfBoard