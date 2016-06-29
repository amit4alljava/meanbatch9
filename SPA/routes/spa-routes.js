// Routing of SPA
app.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"home.html",
        controller:"homeCtrl"
    }).when("/login",{
        templateUrl:"login.html",
        controller:"loginCtrl"
    }).when("/register",{
        templateUrl:"register.html"
    }).when("/offers/:count/:discount",{
        templateUrl:"offers.html",
        controller:"offerCtrl"
    }).when("/aboutus",{
        template:"<h1>This is SPA Demo</h1>"
    }).otherwise({template:"Error Page , No Match Found"
        ,redirectTo:"/"});
});