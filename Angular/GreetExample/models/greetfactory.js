/*
Model can be Factory or Service

*/
// Define Factory for the Logic
// Factory Basically is a function and factory must return an object
// Object contains the factory logic
module.factory("greetfactory",function(){
    //alert("Factory Start");
    var object={
        initCap:function(name){
            return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();       
        }
    }
    return object; // factory returns object
});