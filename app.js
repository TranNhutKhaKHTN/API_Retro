var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const boardRouter = require('./routes/boardRouter')
const cardRouter = require("./routes/cardRouter")
const Card = require('./model/Card')

var http = require("http");
var socketio = require("socket.io");

var app = express();

// var mongoose = require("./database/database")


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});

const port = process.env.PORT || 5000
const server = http.createServer(app);
var io = require('socket.io')(server, { origins: '*:*' });
// io.set('origins', '*:*');
// io.origins('*:*')

io.on("connection", socket => {
  console.log("new connect to server");

  socket.on("fetchDataAllCard", id => {
    Card.getCardOfBoard(id.id)
      .then(data => {
        io.local.emit(`fetchDataCardSuccess${id.id}`, data)
      })
      .catch(() => {
        socket.emit("fetchDataCardFail", null)
      })
  });

  socket.on("disconnect", () => {
    console.log("client disconnected");
  });
})



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/board', boardRouter);
app.use('/card', cardRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));

});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = { app, server };
