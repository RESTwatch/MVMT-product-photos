const mongoose = require('mongoose');
const { Photos } = require('./schema.js');

mongoose.connect('mongodb://localhost/photos', { useNewUrlParser: true });

module.exports = {
  getPhotosById: (watchId, serverCB) => {
    Photos.find({ _id: Number(watchId) }, (err, results) => {
      if (err) {
        serverCB(err);
      } else {
        serverCB(results);
      }
    });
  },
  db: mongoose.connection,
};
