const mongoose = require('mongoose');
const dataScript = require('../data_generation/data_script');


mongoose.connect('mongodb://localhost/photos');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('DB connected!');
});

const photosSchema = new mongoose.Schema({
  wid: Number,
  frontImg: String,
  sideImg: String,
  backImg: String,
  box: String,
  styleImg: String,
});

const Photos = mongoose.model('Photos', photosSchema);

const data = dataScript(100, 199);

data.forEach((record) => {
  const watchPhotos = new Photos(record);

  watchPhotos.save((err, result) => {
    if (err) {
      throw err;
    } else {
      return result;
    }
  });
});

module.exports.Photos = Photos;
