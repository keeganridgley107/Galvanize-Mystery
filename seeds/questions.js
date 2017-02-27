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
            title: 'Question 1',
            text: 'What is the correct HTML for referring to an external stylesheet?',
            image: 'media/frontend-questions/1.jpg',
            answer1: 'option1',
            answer2: ' option2',
            answer3: ' option3'
          }
        ),
        knex('questions').insert(
          {
            id: 2,
            title: 'Question 2',
            text: 'Which HTML tag is used to define an internal stylesheet?',
            image: 'media/frontend-questions/2.jpg',
            answer1: 'option1',
            answer2: ' option2',
            answer3: ' option3'
          }
        ),
        knex('questions').insert(
          {
            id: 3,
            title: 'Third time is the charm',
            text: 'this is a where we seperate the wheat from the chaff',
            image: 'media/frontend-questions/3.jpg',
            answer1: '8228',
            answer2: 'NaN',
            answer3: 'undefined'
          }
        ),
        knex('questions').insert(
          {
            id: 4,
            title: 'Third time is the charm',
            text: 'this is a where we seperate the wheat from the chaff',
            image: 'media/frontend-questions/4.jpg',
            answer1: '8228',
            answer2: 'NaN',
            answer3: 'undefined'
          }
        )

      ]);
    });
};
