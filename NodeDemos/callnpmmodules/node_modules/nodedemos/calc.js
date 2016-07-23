var calcObject = {
    add:function(x,y){
        return  x + y;
    }
}
var anotherObject = {
    display:function(){
console.log("this is the Display Function ");
    }
}
function print(){
    console.log("This is print Function");
}
module.exports = calcObject;
module.exports.obj2 =anotherObject; 
module.exports.pr = print;