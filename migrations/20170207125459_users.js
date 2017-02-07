'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('plevel').notNullable();
    table.string('userAns').notNullable();
    table.string('password').notNullable();
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('users');
};
