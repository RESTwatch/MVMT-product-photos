const mongoose = require('mongoose');
const { Photos } = require('../db/schema.js');

// const mongoUrl = 'mongodb://database/photos';

// mongoose.connect(mongoUrl, { useNewUrlParser: true });
mongoose.connect('mongodb://localhost/photos', { useNewUrlParser: true });
// mongoose.connect('mongodb://172.17.0.2/photos', { useNewUrlParser: true });


const dataScript = (min, max) => {
  const watchPhotos = [];

  watchPhotos.push(
    {
      _id: 100,
      name: 'Voyager',
      frontImg: 'https://s3-us-west-1.amazonaws.com/restwatch-product-photos/100_front.jpg',
      sideImg: 'https://s3-us-west-1.amazonaws.com/restwatch-product-photos/100_side.jpg',
      backImg: 'https://s3-us-west-1.amazonaws.com/restwatch-product-photos/100_back.jpg',
      box: 'https://s3-us-west-1.amazonaws.com/restwatch-product-photos/box.jpg',
      styleImg: 'https://s3-us-west-1.amazonaws.com/restwatch-product-photos/100_style.jpg',
    },
  );

  for (let i = min; i <= max; i += 1) {
    let num;
    const names = ['Voyager', 'Ghost', 'Slate', 'Eclipse', 'Chrono', 'Myst', 'Argo', 'Vice', 'Dune', 'Calypso', 'Rogue', 'Avalon', 'Denali', 'Mariner', 'Maverick', 'Abyss', 'Atlas'];
    const randomPhotoNum = () => {
      const low = 100;
      const high = 160;
      num = Math.floor(Math.random() * (high - low + 1)) + low;
      return num;
    };

    const randomArrayElement = (array) => {
      const idx = Math.floor(Math.random() * array.length);
      return array[idx];
    };

    watchPhotos.push(
      {
        _id: i,
        name: randomArrayElement(names),
        frontImg: `https://s3-us-west-1.amazonaws.com/restwatch-product-photos/${randomPhotoNum()}_front.jpg`,
        sideImg: `https://s3-us-west-1.amazonaws.com/restwatch-product-photos/${num}_side.jpg`,
        backImg: `https://s3-us-west-1.amazonaws.com/restwatch-product-photos/${num}_back.jpg`,
        box: 'https://s3-us-west-1.amazonaws.com/restwatch-product-photos/box.jpg',
        styleImg: `https://s3-us-west-1.amazonaws.com/restwatch-product-photos/${num}_style.jpg`,
      },
    );
  }
  return watchPhotos;
};

const data = dataScript(101, 199);

data.forEach((record, i) => {
  Photos.create(record, (err) => {
    if (err) throw err;
    if (i === 99) {
      process.exit();
    }
  });
});
