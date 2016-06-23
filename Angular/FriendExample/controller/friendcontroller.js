app.controller("friendctrl",function($scope,friendfactory){
   $scope.friends =  friendfactory.getFriendsData();
});