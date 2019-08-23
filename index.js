const express = require('express');
const feedbackModel = require('./configdb');
//var _ = require('underscore');
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
 var numbers;
 app.get('/qwerty', (req, res)=>{
 // res.send(200)
 //feedbackModel.find().sort(['updatedAt', 1]);
 var result = '';
 feedbackModel.findOne((err, doc) =>{
   //;
   result =  ({data: doc});
   res.json({result});
  
 });

//this. = numbers
//res.json(this.mDataArray);
 //console.log();
 //
 //res.send("<p>ALL Feedbacks</p><ol><li *ngFor=\"let item of mDataArray\">{{item.text}} : <span style=\"color: gray\">{{item.data}}</span> </li>\</ol>");

 //this.getFeedback();
});




feedbackModel.findOne({ 'name.text': 'text' }, 'name occupation', function (err, person) {
  if (err) return handleError(err);
  // Prints "Space Ghost is a talk show host".
  //console.log(feedbackModel.name.Model)
  console.log('%s %s is a %s.', feedbackModel.name.text, feedbackModel.name.last,
  feedbackModel.occupation);
});



