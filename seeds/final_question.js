"use strict";
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('final_question').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('final_question').insert(
          {
            id: 1,
            title: 'Final Question',
            text: 'How do you display a hyperlink without an underline?',
            image: 'media/frontend-questions/5.jpg',
            answer1: 'option1',
            answer2: '!option2',
            answer3: '!option3'
          }
        )
      ]);
    });
};
