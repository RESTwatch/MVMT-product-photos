const { Client } = require('pg');
const config = require('../../config');

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
  const queryString = `select * from photos where id = ${id}`;
  client.query(queryString, (err, results) => {
    if (err) {
      callback(err);
    } else {
      const data = {
        id: results.rows[0].id,
        frontImg: results.rows[0].frontimg,
        sideImg: results.rows[0].sideimg,
        backImg: results.rows[0].backimg,
        box: results.rows[0].box,
        styleImg: results.rows[0].styleimg,
      };
      callback(null, data);
    }
  });
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
