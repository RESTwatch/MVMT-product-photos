const fs = require('graceful-fs');
const path = require('path');

let currentId = 1;
let num;
const start = new Date().getTime();

const randomPhotoNum = (id) => {
  const low = 100;
  const high = 160;
  if (id >= low && id <= high) {
    num = id;
  } else {
    num = Math.floor(Math.random() * (high - low + 1)) + low;
  }
  return num;
};

const csvGenerate = (id) => {
  const row = `${id},watch${id},https://s3-us-west-1.amazonaws.com/restwatch-product-photos/${randomPhotoNum(id)}_front.jpg,https://s3-us-west-1.amazonaws.com/restwatch-product-photos/${num}_side.jpg,https://s3-us-west-1.amazonaws.com/restwatch-product-photos/${num}_back.jpg,https://s3-us-west-1.amazonaws.com/restwatch-product-photos/box.jpg,https://s3-us-west-1.amazonaws.com/restwatch-product-photos/${num}_style.jpg\n`;
  const csvOutput = id === 1
    ? `id,name,frontImg,sideImg,backImg,box,styleImg\n${row}`
    : `${row}`;
  currentId += 1;
  return csvOutput;
};

const generateData = (entries) => {
  const write = fs.createWriteStream(path.join(__dirname, '/data/photo_data.csv'));

  const writeData = (entriesDone) => {
    if (currentId >= entries) {
      const end = new Date().getTime();
      console.log('Write time: ', (end - start) / 1000, ' seconds');
      return;
    }
    const ok = write.write(csvGenerate(currentId));
    if (ok) {
      writeData(entriesDone + 1);
    } else {
      write.once('drain', () => {
        writeData(entriesDone + 1);
      });
    }
  };

  writeData(0);
};

generateData(10000001);
