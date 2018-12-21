module.exports = (min, max) => {
  const watchPhotos = [];

  for (let i = min; i <= max; i += 1) {
    watchPhotos.push(
      {
        wid: i,
        frontImg: `https://s3-us-west-1.amazonaws.com/hrsf107-the-event-handlers-mvmt-photos/${i}_back.jpg`,
        sideImg: `https://s3-us-west-1.amazonaws.com/hrsf107-the-event-handlers-mvmt-photos/${i}_side.jpg`,
        backImg: `https://s3-us-west-1.amazonaws.com/hrsf107-the-event-handlers-mvmt-photos/${i}_back.jpg`,
        box: 'https://s3-us-west-1.amazonaws.com/hrsf107-the-event-handlers-mvmt-photos/box.jpg',
        styleImg: `https://s3-us-west-1.amazonaws.com/hrsf107-the-event-handlers-mvmt-photos/${i}_style.jpg`,
      },
    );
  }
  return watchPhotos;
};
