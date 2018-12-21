module.exports = (min, max) => {
  const watchPhotos = [];

<<<<<<< HEAD
  for (let i = min; i < max; i += 1) {
    const randomPhotoNum = () => {
      const low = 100;
      const high = 120;
      return Math.floor(Math.random() * (high - low + 1)) + low;
    };

=======
  for (let i = min; i <= max; i += 1) {
>>>>>>> 9ed72d63f729ffdfb17c5126f71460f21e90adb2
    watchPhotos.push(
      {
        wid: i,
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
