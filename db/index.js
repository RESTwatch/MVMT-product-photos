const mongoose = require('mongoose');
const { Photos } = require('./schema.js');

mongoose.connect('mongodb://172.17.0.2/photos', { useNewUrlParser: true });

const getPhotosById = (watchId, serverCB) => {
  Photos.findOne({ _id: Number(watchId) }, serverCB );
};

module.exports = { getPhotosById };
