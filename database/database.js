const mongoose = require("mongoose")
const url = "mongodb+srv://DBTest:trannhutkha123456@cluster0.0cz1q.mongodb.net/Retro?retryWrites=true&w=majority"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("success");
});

// const BoardSchema = require('./../model/Board')

// const Board = mongoose.model("Board", BoardSchema, "Board")

// const board = new Board({
//   id: "dahksjdka",
//   name: "kha1",
//   type: 2
// })

// board.save(function (err, result) {
//   if (err) {
//     console.log("error save");
//   }
//   else {
//     console.log(result + "30")
//   }
// })

// db.collection("Board").save


module.exports = mongoose