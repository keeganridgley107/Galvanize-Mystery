"use strict";
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('questions').insert(
          {
            id: 1,
            title: 'The First Step',
            text: 'this is a puzzle that leads to a secret page only accessable to the gifted',
            question_id: 1,
            answer1: 'best possible answer',
            answer2: 'possible second answer',
            answer3: 'possible third answer'
          }
        ),
        knex('questions').insert(
          {
            id: 2,
            title: 'second question',
            text: 'this is a riddle using math and CSF concepts to challenge students in gschool',
            question_id: 2,
            answer1: 'best possible answer',
            answer2: 'possible second answer',
            answer3: 'possible third answer'
          }
        ),
        knex('questions').insert(
          {
            id: 3,
            title: 'Third time is the charm',
            text: 'this is a where we seperate the wheat from the chaff',
            question_id: 1,
            answer1: 'best possible answer',
            answer2: 'possible second answer',
            answer3: 'possible third answer'
          }
        )
      ]);
    });
};
