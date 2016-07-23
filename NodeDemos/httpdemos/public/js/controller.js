app.controller("ctrl",function($scope,datafactory){
    $scope.getData=function(){
        var promise = datafactory.getEmp();
        promise.then(function(data){
            $scope.data = data;
        },function(err){
            $scope.error = err;
        });
        
    }
})