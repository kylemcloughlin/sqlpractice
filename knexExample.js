
const settings = require('./settings');
var knex = require('knex')({
    client: 'pg',
    connection: {
      host : settings.hostname,
      user : settings.user,
      password : settings.password,
      database : settings.database
    }
  });

  knex('famous_people')
  .where({ first_name: 'Barack' })
  .then(rows =>{
    console.log(rows)
}).finally(() => {
    knex.destroy();
})
