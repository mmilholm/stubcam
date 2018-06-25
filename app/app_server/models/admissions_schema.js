const mongoose = require('mongoose');


const admissionSchema = new mongoose.Schema ({
  category: {
    type: String,
    required: true,
    enum: ['General Admissions']
  },
  group: {
    type: String,
    required: true,
    enum: ['Camosun Student (with ID)', 'Non-Camosun Student', 'Adults', 'Seniors', 'Youth (13-17)', 'Children (12 and under)']
  },
  price: {
    type: Number,
    default: 0
  }
});

mongoose.model('admission', admissionSchema);
