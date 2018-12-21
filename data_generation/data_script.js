const mongoose = require('mongoose');
const { Photos } = require('../db/schema.js');

mongoose.connect('mongodb://localhost/photos', { useNewUrlParser: true });


const dataScript = (min, max) => {
  const watchPhotos = [];

  watchPhotos.push(
    {
      _id: 100,
      frontImg: 'https://s3-us-west-1.amazonaws.com/hrsf107-the-event-handlers-mvmt-photos/100_back.jpg',
      sideImg: 'https://s3-us-west-1.amazonaws.com/hrsf107-the-event-handlers-mvmt-photos/100_side.jpg',
      backImg: 'https://s3-us-west-1.amazonaws.com/hrsf107-the-event-handlers-mvmt-photos/100_back.jpg',
      box: 'https://s3-us-west-1.amazonaws.com/hrsf107-the-event-handlers-mvmt-photos/box.jpg',
      styleImg: 'https://s3-us-west-1.amazonaws.com/hrsf107-the-event-handlers-mvmt-photos/100_style.jpg',
    },
  );

  for (let i = min; i < max; i += 1) {
    const randomPhotoNum = () => {
      const low = 100;
      const high = 120;
      return Math.floor(Math.random() * (high - low + 1)) + low;
    };

    watchPhotos.push(
      {
        _id: i,
        frontImg: `https://s3-us-west-1.amazonaws.com/hrsf107-the-event-handlers-mvmt-photos/${randomPhotoNum()}_back.jpg`,
        sideImg: `https://s3-us-west-1.amazonaws.com/hrsf107-the-event-handlers-mvmt-photos/${randomPhotoNum()}_side.jpg`,
        backImg: `https://s3-us-west-1.amazonaws.com/hrsf107-the-event-handlers-mvmt-photos/${randomPhotoNum()}_back.jpg`,
        box: 'https://s3-us-west-1.amazonaws.com/hrsf107-the-event-handlers-mvmt-photos/box.jpg',
        styleImg: `https://s3-us-west-1.amazonaws.com/hrsf107-the-event-handlers-mvmt-photos/${randomPhotoNum()}_style.jpg`,
      },
    );
  }
  return watchPhotos;
};

const data = dataScript(101, 199);

data.forEach((record) => {
  Photos.create(record, (err) => {
    if (err) throw err;
  });
});
