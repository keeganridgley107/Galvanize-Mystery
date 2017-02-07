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
            title: 'The last Step',
            text: 'YOU ARE ALMOST THERE, Remember: this leads to a secret page only accessable to the gifted',
            image: 'http://www.maydaymystery.org/mayday/offsite/15_may1.jpg',
            answer1: '5280',
            answer2: '255',
            answer3: 'maydaymystery'
          }
        )
      ]);
    });
};
