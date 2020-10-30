// const db = require('./../database/database')
const mongoose = require('mongoose')

CardSchema = new mongoose.Schema({
  idBoard: String,
  content: String,
  type: Number
})
const Card = mongoose.model("Card", CardSchema, "Card")

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

const createNewCard = async (card) => {
  // console.log(card);
  const newcard = new Card({
    ...card
  })
  // console.log(newcard);
  return newcard.save();
}
exports.createNewCard = createNewCard

const deleteCard = async (card) => {
  // console.log(card);
  return Card.deleteOne({ _id: card.id });
}
exports.deleteCard = deleteCard

const updateCard = (condition, data) => {
  return Card.update(condition, data);
}
exports.updateCard = updateCard