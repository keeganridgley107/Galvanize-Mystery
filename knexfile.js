// Update with your config settings.
'use strict';
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/questions'
   },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
   },
};

//the production object within the module.exports object, connects to heroku for when you deploy. The heroku version of the database.

//These objects inside objects are essentially 'fed' to knex.js, in order to connect to the proper databases.
