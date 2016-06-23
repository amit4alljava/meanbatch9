/*
Controller is Acting as a Glue B/w the View and the Factory (Model)
$scope - It is Angular Define thing
$ things are always angular things
We are Injecting $scope in Controller
$scope can get the data from the controller scope
*/
// DI Dependency Injection (Factory)
// Here I am Injecting Factory in the Controller
module.controller("greetctrl",function($scope,greetfactory){
    // Take Data from the View and give it to the Factory (Model)
    //alert("Controller Start...");
    $scope.greet=function(){
        var firstName = $scope.firstname;
        var lastName = $scope.lastname;
        $scope.result = greetfactory.initCap(firstName) + "  " +greetfactory.initCap(lastName)
        //alert("I am in Greet");
    }
    $scope.clear=function(){
        $scope.firstname="";
        $scope.lastname="";
        $scope.result="";
    }
});