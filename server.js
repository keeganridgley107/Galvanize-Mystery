'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const questions = require('./routes/questions');
const finalQuestion =require('./routes/final_question');
const users = require('./routes/users');
const path = require('path');
//const request = require('request');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/questions', questions);
app.use('/final_question', finalQuestion);
app.use('/users', users);



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening on port', port);
});




module.exports = app;
