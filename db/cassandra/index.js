const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'watches' });
const query = 'SELECT * FROM photos WHERE id = ?;';

// client.execute(query, [ 'id' ], callback);
