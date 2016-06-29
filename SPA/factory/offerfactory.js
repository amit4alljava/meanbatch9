app.factory("offerFactory",function($http,$q){
    // Asynch Call
    //var getJSON =function(scope){
     var getJSON = function(){
        var defered = $q.defer();
        console.log("Calling GetJSON")
        //http://localhost:63342/AngularJSAprBatch/SPA/factory/offers.json
    $http.get("offers.json").success(function(data){
        console.log("Inside Success "+data);
        defered.resolve(data);
        //scope.offers=data;
    }) .error(function(er){
        console.log("Error is ",er);
        //scope.offers = er;
        defered.reject(er);

    });
        return defered.promise;
    };
    return {"otheroffers":"Offers Before April End","getjson":getJSON};
});