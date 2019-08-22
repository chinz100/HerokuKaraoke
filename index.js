const express = require('express');

//const Datastore = require('nedb');
//const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});
require('./db');

app.use(express.json({ limit: '1mb' }));


var karaoke = require('./karaoke')

app.use('/newuser', karaoke.thai2karaoke())
app.post('/api', (req, res)=>{
 
  console.log(req.body)
  res.send(200)
 });
/*

app.get('/qwerty', (req, res)=>{
 res.send(200)
 feedbackModel.find((err, doc)=>{
  if(err) res.json({result: "failed"});
  res.json({result: "success",data: doc});
});
});
*/

