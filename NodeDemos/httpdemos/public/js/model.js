app.factory("datafactory",function($http,$q){
    return {
        getEmp:function(){
           var defer = $q.defer(); $http.get('getjson').success(function(data){
                defer.resolve(data);
            }).error(function(err){
                defer.reject(err);
            });
            return defer.promise;
        }
    }
})