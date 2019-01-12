const mongoose = require('mongoose');
const { Photos } = require('./schema.js');

// const mongoUrl = 'mongodb://database/photos';

// mongoose.connect(mongoUrl, { useNewUrlParser: true });
// mongoose.connect('mongodb://172.17.0.2/photos', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost/photos', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MondoDB Successfully Connected');
});

const getPhotosById = (watchId, serverCB) => {
  Photos.findOne({ _id: Number(watchId) }, serverCB);
};

const addPhotos = (id, name, callback) => {
  let num;
  const randomPhotoNum = () => {
    const low = 100;
    const high = 160;
    num = Math.floor(Math.random() * (high - low + 1)) + low;
    return num;
  };
  Photos.create({
    _id: id,
    name,
    frontImg: `https://s3-us-west-1.amazonaws.com/restwatch-product-photos/${randomPhotoNum()}_front.jpg`,
    sideImg: `https://s3-us-west-1.amazonaws.com/restwatch-product-photos/${num}_side.jpg`,
    backImg: `https://s3-us-west-1.amazonaws.com/restwatch-product-photos/${num}_back.jpg`,
    box: 'https://s3-us-west-1.amazonaws.com/restwatch-product-photos/box.jpg',
    styleImg: `https://s3-us-west-1.amazonaws.com/restwatch-product-photos/${num}_style.jpg`,
  }, callback);
};

const updatePhoto = (watchId, property, key, callback) => {
  Photos.findOneAndUpdate({ _id: Number(watchId) }, {
    [property]: key,
  }, callback);
};

const deletePhotosById = (watchId, callback) => {
  Photos.deleteOne({ _id: Number(watchId) }, callback);
};

module.exports = {
  getPhotosById,
  addPhotos,
  updatePhoto,
  deletePhotosById,
};
