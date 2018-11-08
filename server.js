const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

var mongoose = require('mongoose');
// const routes = require('./routes');
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Import routes and give the server access to them.
var sourceroutes = require('./routes/api/source');

app.use(sourceroutes);

var userroutes = require('./routes/api/users');
var authroutes = require('./routes/api/auth')
app.use(userroutes);
app.use(authroutes);

var artroutes = require('./routes/api/article');

app.use(artroutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/ptfdb';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
