
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

var accountSid = 'ACeb02d10491f38b0324d8176860818548';
var authToken = "fe9b0cffaa4fd443f90185bbdfddf6d7";
var client = require('twilio')(accountSid, authToken);

router.get('/', function(req, res) {

client.calls.create({
  url: "https://handler.twilio.com/twiml/EH1814369fd223e5816744eff50636b1a4",
  to: "+15038036811",
  from: "+15038500365"
}, function(err, call) {
  process.stdout.write(call.sid);
});

});


module.exports = router;
