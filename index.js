const express = require('express');
//const Datastore = require('nedb');
//const fetch = require('node-fetch');
//var googleTranslate = require('google-translate')(apiKey);
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});
app.use(express.static('public'));

var karaoke = require('./karaoke')
app.use('/newuser', karaoke.thai2karaoke());

