const settings = require('./settings');
const knex = require('knex')({
    client: 'pg',
    connection: {
      host : settings.hostname,
      user : settings.user,
      password : settings.password,
      database : settings.database
    }
  });


let input = process.argv.slice(2);
let firstName = input[0]
let lastName = input[1]
let dob = input[2]

knex('famous_people')
  .insert([{ first_name: firstName,
            last_name: lastName,
            birthdate: dob
  }]).finally(() => {
    knex.destroy();
  })





