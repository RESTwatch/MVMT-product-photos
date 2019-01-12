const pg = require('pg');
const config = require('../config');

const connectionString = `postgres://postgres:${config.postgresPassword}@localhost:5432/postgres`;
const client = new pg.Client(connectionString);

client.connect();

// DB FUNCTIONS
// client.query('select * from photos where id = 1000', callback);
