// const db = require('./../database/database')
const mongoose = require('mongoose')

UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String
})
const User = mongoose.model("User", UserSchema, "User")

exports.createUser = (user) => {
  const users = new User({
    ...user
  })

  return users.save()
}

exports.getUser = (user) => {
  // console.log(user);
  const data = User.findOne({ username: user }).exec()
  // console.log(data);
  return data
}