const pg = require('pg');
const settings = require('./settings');

const client = new pg.Client({

    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
});
let argv = process.argv.slice(2);
client.connect((err) => {
    if (err) {
        return console.error('connection Error', err);
    }
    let query = `SELECT * FROM famous_people WHERE first_name = '${argv}';`
    console.log('Searching....');
    client.query(query, (err, result) => {
    //  let output = [] 
        if (err) {
            return console.error('error running query', err);
        }
        console.log(`found ${result.rows.length} person(s) by the name '${argv}'`);
        let counter = 1;
        for (row of result.rows){

        console.log(`- ${counter} ${row.first_name} ${row.last_name}, born ${row.birthdate}`);
    counter ++;
    }
        client.end();
    })


})










// let argv = process.argv.slice(2);

// function lookUp() {
//     let query = `SELECT * FROM famous_people WHERE first_name = ${argv};`
//     console.log(query);
// }