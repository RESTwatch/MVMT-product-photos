const mongoose = require('mongoose');
const { Photos } = require('./schema.js');

// const mongoUrl = 'mongodb://database/photos';

// mongoose.connect(mongoUrl, { useNewUrlParser: true });
mongoose.connect('mongodb://172.17.0.2/photos', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MondoDB Successfully Connected');
});

const getPhotosById = (watchId, serverCB) => {
  Photos.findOne({ _id: Number(watchId) }, serverCB);
};

module.exports = { getPhotosById };
