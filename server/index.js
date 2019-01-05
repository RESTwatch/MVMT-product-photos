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

app.listen(PORT, () => console.log(`Express is listening on port ${PORT}!`));
