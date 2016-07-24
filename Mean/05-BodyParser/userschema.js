
var dbobject = require("./db.js");

//create schema for blog post
var userSchema = new dbobject.mongoose.Schema({
  userid:  String,
  password: String,
  username:   String
  
});

//compile schema to model
module.exports = dbobject.db.model('webusers', userSchema);
