const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var dataSchema = new Schema({
  letter: String,
  frequency: Number,
  date: Date
},{
  timestamps: true
})

var Data = mongoose.model('Data',dataSchema);

module.exports = Data
