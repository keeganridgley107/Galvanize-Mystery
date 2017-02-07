'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
//require resources / tools above


router.get('/', function(req, res) {
  knex('users')
  .select ('*')
  .then(function(data) {
    res.send(data);
  })
  .catch(function(err) {
    res.send(err);
  });
});

//routes for psql connection to the maydaymystery webpage

module.exports = router;
