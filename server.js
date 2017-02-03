'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const questions = require('./routes/questions');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, '/../', 'node_modules')))
app.use('/questions', questions);

// app.use('*', function(req, res, next) {
//   res.sendFile('index.html', {root: path.join(__dirname, 'public')})
// })



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening on port', port);
});




module.exports = app;
