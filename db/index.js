const mongoose = require('mongoose');
const { Photos } = require('./schema.js');

mongoose.connect('mongodb://localhost/photos', { useNewUrlParser: true });

const getPhotosById = (watchId, serverCB) => {
  Photos.find({ _id: Number(watchId) }, serverCB );
};

module.exports = { getPhotosById };
