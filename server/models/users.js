const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var usersSchema = new Schema({
  name: String,
  email:String,
  password:String,
},{
  timestamps: true
})

let Users = mongoose.model('Users',usersSchema)


module.exports = Users
