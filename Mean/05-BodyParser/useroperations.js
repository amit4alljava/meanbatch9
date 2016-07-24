var userOperations = {
addNewUser:function(uid, pwd,uname,res){
    var userSchema = require("./userschema.js");
    console.log("UserSchema is "+userSchema);
    console.log("Typeof UserSchema is ",typeof userSchema);
var user = new userSchema({userid: uid, password: pwd,"username":uname,"city":'Delhi'}); 
    console.log("************User Object ",user);

//userSchema.update(
//     {userid: 'abcd'}, 
//     {password : 'example' },
//    {uname: 'example' },
//    {city : 'Delhi' }
//     {multi:true}, 
//       function(err, numberAffected){  
//        if(err){
//console.log("Not Updated..");
//        
//        }
//    else{
//        console.log("Updated...");
//    }
//});    
//save model to MongoDB
user.save(function (err) {
  if (err) {
	console.log("Error in Addition....");
      res.send("Error in Addition ");
      //return err;
  }
  else {
  	console.log("User Added....");
      var path = require("path");
      res.sendFile('welcome.html', { root: path.join(__dirname, '/public') });
      //res.send("Record Added ");
  }
});
},
getUsers:function(res){
    var userSchema = require("./userschema.js");
    
	
    userSchema.find({},function(err,docs){
        res.json(docs);
    })
}    
}
module.exports = userOperations;
