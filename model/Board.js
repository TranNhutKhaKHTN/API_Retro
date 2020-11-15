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
  return board
}
exports.getBoardOfUser = getBoardOfUser

const updateBoard = (board) => {
  return Board.updateOne({ _id: board._id }, board)
}
exports.updateBoard = updateBoard

exports.createBoard = (board) => {
  const newBoard = new Board({
    ...board
  })
  return newBoard.save();
}

exports.deleteBoard = (board) => {
  return Board.deleteOne({ _id: board.id })
}

exports.checkBoardContant = (board) => {
  return Board.findById({ _id: board })
}