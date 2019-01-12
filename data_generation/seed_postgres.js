const pg = require('pg');
const config = require('../config');

const connectionString = `postgres://postgres:${config.postgresPassword}@localhost:5432/postgres`;
const client = new pg.Client(connectionString);

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

client.query(`COPY photos (id, name, frontImg, sideImg, backImg, box, styleImg) FROM '/Users/meganhr/SDC/photos-service/MVMT-product-photos/data_generation/data/photo_data.csv' DELIMITERS ',' CSV HEADER;`, (err) => {
  if (err) { throw err; }
  console.log('SUCCESSFUL IMPORT');
  client.end();
});
