const mongoose = require("mongoose")
const url = "mongodb+srv://DBTest:trannhutkha123456@cluster0.0cz1q.mongodb.net/Retro?retryWrites=true&w=majority"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("connect mongo success!");
});

// const BoardSchema = require('./../model/Board')

// const Board = mongoose.model("User", BoardSchema, "User")

// const board = new Board({
//   idUser: "123",
//   name: "tran nhut kha"
// })

// board.save(function (err, result) {
//   if (err) {
//     console.log("error save");
//   }
//   else {
//     console.log(result + "30")
//   }
// })

// const a = Board.find(function (error, result) {
//   if (error) {
//     console.log("error");
//   }
//   else {
//     console.log(result);
//   }
// })
// console.log(a);

// db.collection("Board").save


module.exports = db