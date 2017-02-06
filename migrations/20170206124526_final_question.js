'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('final_question', function(table) {
    table.increments();
    table.string('title').notNullable();
    table.string('text').notNullable();
    table.string('image').notNullable();
    table.string('answer1').notNullable();
    table.string('answer2').notNullable();
    table.string('answer3').notNullable();
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('final_question');
};
