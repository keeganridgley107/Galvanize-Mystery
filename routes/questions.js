'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
//require resources / tools above







router.get('/', (req, res, next) => {
    knex('questions')
        .select('id', 'title', 'description', 'price', 'item_image')
        .orderBy('id')
    .then((rows) => {
            const quizQuestions = (rows);
            res.send(quizQuestions);
        })
        .catch((err) => {
            next(err);
        });
});



module.exports = router;
