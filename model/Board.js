// const db = require('./../database/database')
const mongoose = require('mongoose')

BoardSchema = new mongoose.Schema({
  idUser: String,
  name: String,
})
const Board = mongoose.model("Board", BoardSchema, "Board")

const getBoard = () => {
  const a = Board.find({})
  return a;
}
exports.getBoard = getBoard;

const getBoardOfUser = (idUser) => {
  const board = Board.find({ idUser: idUser })
  // .then(data => {
  //   return data
  // })
  // .catch(error => { throw error })
  return board
}
exports.getBoardOfUser = getBoardOfUser

const updateBoard = (board) => {
  return Board.updateOne({ _id: board._id }, board)
}
exports.updateBoard = updateBoard