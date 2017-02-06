'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
//require resources / tools above


router.get('/', function(req, res) {
  knex('questions')
  .select ('id', 'title', 'text', 'image', 'answer1', 'answer2', 'answer3')
  .then(function(data) {
    res.send(data);
  })
  .catch(function(err) {
    res.send(err);
  });
});

//routes for psql connection to the webpage

module.exports = router;
