/*
Controller Will talk to HTML (View ) and It take the HTML Data and 
Hand it over to Model (Logic)
*/

// When HTML (DOM) is Loaded this will call automatically
$(document).ready(init);

function init(){
    $("button").click(takeInput);
}

function takeInput(){
    var fullName = initCap($("#firstName").val())+ " " +initCap($("#lastName").val());
    $("h1").html("Welcome "+fullName)
    
}