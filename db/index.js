const mongoose = require('mongoose');
const dataScript = require('../data_generation/data_script');


mongoose.connect('mongodb://localhost/photos', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

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

const getPhotosById = (watchId, serverCB) => {
  Photos.find({wid: Number(watchId)}, (err, results) => {
    if (err) {
      serverCB(err);
    } else {
      serverCB(results);
    }
  });
};

module.exports.Photos = Photos;
module.exports.getPhotosById = getPhotosById;
