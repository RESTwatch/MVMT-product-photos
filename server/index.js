// Setup express and define port
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const db = require('../db/index.js');

const app = express();
const PORT = 3001;

// Serve up middleware
app.use(compression());
app.use('/watches/:wid', express.static('client/public'));
app.use(morgan('tiny'));

// Route to return all records
app.get('/api/watches/:wid/photos', (req, res, next) => {
  const watchId = req.params.wid;
  db.getPhotosById(watchId, (err, results) => {
    if (err) {
      next(err);
    } else {
      res.status(200).end(JSON.stringify(results));
    }
  });
});

// Route to create a new record
app.post('/api/watches/:wid/:name', (req, res) => {
  const watchId = req.params.wid;
  const watchName = req.params.name;
  db.addPhotos(watchId, watchName, (err) => {
    if (err) {
      res.send(404).end();
    } else {
      res.send(`Successful post of watch ${watchId}`);
    }
  });
});

// Route to update a record
app.put('/api/watches/:wid/:imgName=:pid', (req, res) => {
  const watchId = req.params.wid;
  const image = req.params.imgName;
  const photoId = req.params.pid;
  const photo = `https://s3-us-west-1.amazonaws.com/restwatch-product-photos/${photoId}_side.jpg`;
  db.updatePhoto(watchId, image, photo, (err) => {
    if (err) {
      res.send(404).end();
    } else {
      res.send(`Successful update of watch ${watchId}`);
    }
  });
});

// Route to delete a record
app.delete('/api/watches/:wid', (req, res) => {
  const watchId = req.params.wid;
  db.deletePhotosById(watchId, (err) => {
    if (err) {
      res.send(404).end();
    } else {
      res.send(`Successful deletion of watch ${watchId}`);
    }
  });
});

app.listen(PORT, () => console.log(`Express is listening on port ${PORT}!`));
