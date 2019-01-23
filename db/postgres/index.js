const { Client } = require('pg');
const config = require('../../config');
const redis = require('../redis/index');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: config.postgresPassword,
  database: 'postgres',
});

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
});

// DB FUNCTIONS

const getPhotosById = (id, callback) => {
  if (id < 100 || id > 10000000) {
    callback('Please input a valid id from 100 to 10,000,000');
  } else {
    redis.getRedis(id, (error, response) => {
      if (error || response === null) {
        const queryString = `select * from photos where id = ${id}`;
        client.query(queryString, (err, pgres) => {
          if (err) {
            callback(err);
          } else {
            const data = {
              id: pgres.rows[0].id,
              frontImg: pgres.rows[0].frontimg,
              sideImg: pgres.rows[0].sideimg,
              backImg: pgres.rows[0].backimg,
              box: pgres.rows[0].box,
              styleImg: pgres.rows[0].styleimg,
            };
            redis.setRedis(data.id, data, callback);
          }
        });
      } else {
        callback(null, response);
      }
    });
  }
};

const addPhotos = (id, name, callback) => {
  let num;
  const randomPhotoNum = () => {
    const low = 100;
    const high = 160;
    num = Math.floor(Math.random() * (high - low + 1)) + low;
    return num;
  };
  const queryString = `insert into photos (id, name, frontImg, sideImg, backImg, box, styleImg) VALUES (${id}, '${name}', 'https://s3-us-west-1.amazonaws.com/restwatch-product-photos/${randomPhotoNum()}_front.jpg', 'https://s3-us-west-1.amazonaws.com/restwatch-product-photos/${num}_side.jpg', 'https://s3-us-west-1.amazonaws.com/restwatch-product-photos/${num}_back.jpg', 'https://s3-us-west-1.amazonaws.com/restwatch-product-photos/box.jpg', 'https://s3-us-west-1.amazonaws.com/restwatch-product-photos/${num}_style.jpg')`;
  client.query(queryString, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

const updatePhoto = (id, property, value, callback) => {
  const queryString = `update photos set ${property} = '${value}' where id = ${id}`;
  client.query(queryString, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

const deletePhotosById = (id, callback) => {
  const queryString = `delete from photos where id = ${id}`;
  client.query(queryString, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

module.exports = {
  getPhotosById,
  addPhotos,
  updatePhoto,
  deletePhotosById,
};
