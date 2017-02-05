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
            title: 'title',
            text: 'text',
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
        )
      ]);
    });
};
