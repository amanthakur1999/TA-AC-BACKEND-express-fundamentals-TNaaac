var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use((req, res, next) => {
  res.cookie('username', 'Aman');
  next();
});

//route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/project.html');
});
app.get('/users', (req, res) => {
  res.send('<h3>Welcome to user pages</h3>');
});

app.listen(4000, () => {
  console.log('express server listening on port 4000');
});
