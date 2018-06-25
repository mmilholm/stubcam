const mongoose = require('mongoose');

let dbURI = 'mongodb://mongo/stubcam';

if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGO_URL;
}

mongoose.connect(dbURI, { useMongoClient: true });

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});



require('./game_schema');
require('./admissions_schema');
