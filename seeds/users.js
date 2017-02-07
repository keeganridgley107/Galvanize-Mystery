
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
            userAns: "boulder,3.14,best possible answer,5280",
            password: "god"

          }
        ),
        knex('users').insert(
          {
            id: 2,
            name: "Karl Marx",
            plevel: "40",
            userAns: "boulder,java,best possible answer,5280",
            password: "idealist"
          }
        ),
        knex('users').insert(
          {
            id: 3,
            name: "Lenin",
            plevel: "20",
            userAns: "boulder,java,best possible answer,5280",
            password: "killer"
          }
        ),
        knex('users').insert(
          {
            id: 4,
            name: "Trotsky",
            plevel: "10",
            userAns: "boulder,java,best possible answer,5280",
            password: "scum"
          }
        ),
        knex('users').insert(
          {
            id: 5,
            name: "Batman",
            plevel: "100",
            userAns: "boulder,3.14,best possible answer,maydaymystery",
            password: 'hero'
          }
        )
      ]);
    });
};
