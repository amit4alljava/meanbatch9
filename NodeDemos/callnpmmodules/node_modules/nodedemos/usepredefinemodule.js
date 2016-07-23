var fs = require("fs"); // this is core module
// Synch Way
//var content = fs.readFileSync("calc.js");
//console.log(""+content);
// Asynch Call
fs.readFile("calc.js",function(err,content){
    if(err){
        console.log("Error in File Read....");
    }
    else{
    console.log(""+content);
    }
});
console.log("****************************");


var x = 100;
var y = 2000;
var z = x + y;
console.log("Sum is ",z);
for(var i = 1; i<=10; i++){
    console.log("I is ",i);
}