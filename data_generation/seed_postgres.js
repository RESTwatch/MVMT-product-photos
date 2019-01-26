const pg = require('pg');
const config = require('../config');

const client = new pg.Client({
  host: '3.84.32.241',
  port: 5432,
  user: 'postgres',
  password: config.postgresPassword,
  database: 'postgres',
});

client.connect();

client.query(`CREATE TABLE photos (
    id integer PRIMARY KEY,
    name text,
    frontImg text,
    sideImg text,
    backImg text,
    box text,
    styleImg text
);`, (err) => {
  if (err) { throw err; }
  console.log('SUCCESS');
});

client.query(`COPY photos (id, name, frontImg, sideImg, backImg, box, styleImg) FROM '/tmp/photo_data.csv' DELIMITERS ',' CSV HEADER;`, (err) => {
  if (err) { throw err; }
  console.log('SUCCESSFUL IMPORT');
  client.end();
});
