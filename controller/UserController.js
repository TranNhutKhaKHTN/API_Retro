const User = require('./../model/User')
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.createUser = async (req, res) => {
  const user = req.body;
  console.log(user);
  const password = await bcrypt.hash(user.password, saltRounds)
    .then((password) => { return password })
    .catch((error) => console.log(error))
  console.log(password);
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