require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const routes = require('./routes');

const port = process.env.PORT || 3001;

// Setting CORS so that any website can Access our API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

// Setting up express to use json and set it to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lion', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    autoIndex: true // required to enforce unique 
  })
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.error(err));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production')
  app.use(express.static('client/build'));

app.use(routes);

// Error handling
app.use(function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send(err);
  } else {
    next(err);
  }
});

// Send every request to the React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
