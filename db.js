const mongoose = require('mongoose');
const CONNECTION_URL = process.env.MONGODB_URL || 'mongodb://heroku_mnr6xftg:lptdd7eir7kb4hsoj52qlphlc1@ds211708.mlab.com:11708/heroku_mnr6xftg';
mongoose.Promise = global.Promise;
mongoose.set('debug',true);
mongoose.connect(CONNECTION_URL, {
  //  useMongoClient: true
useNewUrlParser: true
});
mongoose.connection.on('connected', function(){
console.log('mongoose connect open');
});

mongoose.connection.on('error', function(err){
console.log('mongoose connect!! error!!');

 });

  mongoose.connection.on('disconnected', function(){
    console.log('mongoose disconnect....');
    
    });

    process.on('SIGINT', function(){
      mongoose.connection.close(function(){
        console.log('mongoose compile OK and close connection...');
        process.exit(0);
      });


    });