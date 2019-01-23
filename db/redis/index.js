const redis = require('redis');

// const client = redis.createClient({
//   host: '127.0.0.1',
//   port: '6379',
// });

const client = redis.createClient({
  host: '3.87.184.3',
  port: '6379',
});

client.on('ready', () => {
  console.log('Redis connected');
});

const getRedis = (id, callback) => {
  client.get(id, (err, reply) => {
    if (err) {
      callback(err);
    } else {
      callback(null, JSON.parse(reply));
    }
  });
};

const setRedis = (id, data, callback) => {
  client.set(id, JSON.stringify(data), 'EX', 6000, (err) => {
    if (err) {
      callback(err);
    } else {
      getRedis(id, callback);
    }
  });
};

module.exports = {
  getRedis,
  setRedis,
};
