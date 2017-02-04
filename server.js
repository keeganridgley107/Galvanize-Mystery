'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const questions = require('./routes/questions');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))

app.use('/questions', questions);



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening on port', port);
});




module.exports = app;
