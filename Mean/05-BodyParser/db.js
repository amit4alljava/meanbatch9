var mongoose = require('mongoose');
var config = require("./config.js"); 
//connect to database
var db = mongoose.connect(config.dburl);
var dbobject  = {
    "db":db,
    "mongoose":mongoose
}
module.exports = dbobject;
