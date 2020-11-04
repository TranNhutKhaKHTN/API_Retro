const User = require('./../model/User')
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.createUser = async (req, res) => {
  const user = req.body;
  console.log(user);
  const dbuser = await User.getUser(user.username);
  if (dbuser !== null) {
    res.send({
      status: 401,
      data: "username đã tồn tại"
    })
    return;
  }

  const password = await bcrypt.hash(user.password, saltRounds)
    .then((password) => { return password })
    .catch((error) => console.log(error))
  // console.log(password);
  const newUser = {
    ...user,
    password: password
  }

  User.createUser(newUser)
    .then((data) => {
      res.send({
        status: 200,
        data: data
      })
    })
    .catch((error) => {
      console.log(error);
      res.send({
        status: 500,
        data: "logup fail"
      })
    })
}

exports.login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username);
  const user = await User.getUser(username);
  console.log(user);
  if (user === null) {
    res.send({
      status: 404,
      data: "loginfail username không tồn tại"
    })
    return;
  }

  bcrypt.compare(password, user.password, (error, result) => {
    if (error || !result) {
      res.send({
        status: 500,
        data: "loginfail"
      })
    }
    else {
      res.send({
        status: 200,
        data: user
      })
    }
  })
}

exports.updateUser = (req, res) => {
  const user = req.body
  console.log(user);
  User.updateUser(user)
    .then((data) => {
      res.send({
        status: 200,
        data: data
      })
    })
    .catch(error => {
      res.send({
        status: 500,
        data: error
      })
    })
}