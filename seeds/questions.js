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
            answer2: '!option2',
            answer3: '!option3'
          }
        ),
        knex('questions').insert(
          {
            id: 2,
            title: 'Question 2',
            text: 'Which HTML tag is used to define an internal stylesheet?',
            image: 'media/frontend-questions/2.jpg',
            answer1: 'option1',
            answer2: '!option2',
            answer3: '!option3'
          }
        ),
        knex('questions').insert(
          {
            id: 3,
            title: 'Question 3',
            text: 'What is the correct CSS syntax?',
            image: 'media/frontend-questions/3.jpg',
            answer1: '!option1',
            answer2: '!option2',
            answer3: 'option3'
          }
        ),
        knex('questions').insert(
          {
            id: 4,
            title: 'Question 4',
            text: 'How do you add a background color for all <h1> elements?',
            image: 'media/frontend-questions/4.jpg',
            answer1: '!option1',
            answer2: 'option2',
            answer3: '!option3'
          }
        )

      ]);
    });
};
