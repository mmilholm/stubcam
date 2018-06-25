const mongoose = require('mongoose');

const gameDetailSchema = new mongoose.Schema ({
  gameImage: {
    type: String
  },
  location: {
    type: String,
    required: true
  },
  preview : {
    type: String
  },
  gameDate: {
    type: Date
  }
});


const gameSchema = new mongoose.Schema ({
  homeTeam: {
    type: String,
    required: true,
    enum: ['Camosun Chargers']
  },
  awayTeam: {
    type: String,
    required: true
  },
  sport: {
    type: String,
    required: true,
    enum: ['Men\'s Volleyball', 'Women\'s Volleyball', 'Men\'s Basketball', 'Women\'s Basketball']
  },
  gameDetails: [gameDetailSchema]
});


//Compile the schema
//First argument -> name of the model
// Second argument -> name of the schema
mongoose.model('game', gameSchema);

