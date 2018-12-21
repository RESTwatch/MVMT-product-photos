// Setup express and define port
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { getPhotosById } = require('../db/index.js');

const app = express();
const PORT = 3001;


// Serve up middleware
app.use(express.static('../client/public'));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(morgan('tiny'));

// Route to return all records
app.get('/api/watches/:wid/photos', (req, res, next) => {
  const watchId = req.params.wid;
  if (watchId === undefined) {
    res.status(404).end();
  } else {
    getPhotosById(watchId, (err, results) => {
      if (err) {
        next(err);
      } else {
        res.status(200).end(results);
      }
    });
  }
});

app.listen(PORT, () => console.log(`Express is listening on port ${PORT}!`));
