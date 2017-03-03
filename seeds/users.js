
"use strict";
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert(
          {
            id: 1,
            name: "jesus",
            plevel: "255",
            userAns: "not used anymore!",
            password: "god"

          }
        ),
        knex('users').insert(
          {
            id: 2,
            name: "fox",
            plevel: "40",
            userAns: "boulder,java,best possible answer,5280",
            password: "slightest"
          }
        ),
        knex('users').insert(
          {
            id: 3,
            name: "scully",
            plevel: "20",
            userAns: "boulder,java,best possible answer,5280",
            password: "Nor"
          }
        ),
        knex('users').insert(
          {
            id: 4,
            name: "mulder",
            plevel: "10",
            userAns: "boulder,java,best possible answer,5280",
            password: "head"
          }
        ),
        knex('users').insert(
          {
            id: 5,
            name: "walter",
            plevel: "100",
            userAns: "boulder,3.14,best possible answer,maydaymystery",
            password: 'even'
          }
        ),
        knex('users').insert(
          {
            id: 6,
            name: "frohike",
            plevel: "10",
            userAns: "boulder,java,best possible answer,5280",
            password: "accounts"
          }
        ),
        knex('users').insert(
          {
            id: 7,
            name: "langly",
            plevel: "10",
            userAns: "boulder,java,best possible answer,5280",
            password: "terms"
          }
        ),
        knex('users').insert(
          {
            id: 8,
            name: "neelix",
            plevel: "10",
            userAns: "boulder,java,best possible answer,5280",
            password: "answer"
          }
        ),
        knex('users').insert(
          {
            id: 9,
            name: "crusher",
            plevel: "10",
            userAns: "boulder,java,best possible answer,5280",
            password: "Time"
          }
        ),
        knex('users').insert(
          {
            id: 10,
            name: "worf",
            plevel: "10",
            userAns: "boulder,java,best possible answer,5280",
            password: "Hatter"
          }
        )
      ]);
    });
};
