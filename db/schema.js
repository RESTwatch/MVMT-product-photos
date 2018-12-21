const mongoose = require('mongoose');

const photosSchema = new mongoose.Schema({
  _id: Number,
  frontImg: String,
  sideImg: String,
  backImg: String,
  box: String,
  styleImg: String,
});

const Photos = mongoose.model('Photos', photosSchema);

module.exports.Photos = Photos;
