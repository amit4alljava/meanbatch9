var app = angular.module("myapp",[]);
app.directive("myFirstDirective",function(){
    return {
        template:"<h1 class=''><b>Hello This is my Custom Directive and this is example</b></h1>",
        restrict:"E"  // Element Level, Attribute Level , Class Level, Comment Level
    }
});
app.controller("myctrl",function($scope){
$scope.firstName = "Amit";
    $scope.secondName = "Srivastava";

});
app.controller("myctrl2",function($scope){
    $scope.firstName = "Ram";
    $scope.secondName = "Kumar";
});

app.directive("nameDirective",function(){
    return {
        template:"<b>Hello Name is  {{firstName}} {{secondName}} </b>",
        restrict:"E"  // Element Level, Attribute Level , Class Level
    }
});

var gpspos;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    gpspos.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
    console.log("Pos is "+gpspos);
}

app.directive("elementlevel",function(){
    return {
        controller:"myctrl2",
        link:function(scope,element,attrs){
            gpspos =  element[0];
            getLocation();
            //element[0].innerHTML="GPS Position is "+gpspos;
            //element[0].innerHTML="<b>Test Complete By "+scope.firstName;
        },
        restrict:"E"  // Element Level, Attribute Level , Class Level
    }
});

app.directive("attributelevel",function(){
    return {
        controller:"myctrl",
        link:function(scope,element,attrs){
            element.bind("mouseenter",function(){
            element[0].innerHTML="this is an Attribute (Mouse enter) level directive";
            });
            element.bind("click",function(){
               alert("U Click on Element"); 
            });
            element.bind("mouseleave",function(){
                element[0].innerHTML="this is an Attribute (Mouse Leave) level directive";
            });
        },

        restrict:"A"  // Element Level, Attribute Level , Class Level
    }
});

app.directive("classlevel",function(){
    return {
        controller:"myctrl",
        link:function(scope,element,attrs){
            element[0].innerHTML="<b>this is an class level directive ";
        },
        restrict:"C"  // Element Level, Attribute Level , Class Level
    }
});

app.directive("commentlevel",function(){
    return {
        controller:"myctrl",
        link:function(scope,element,attrs){
            element[0].innerHTML="<b>this is an comment level directive";
        },
        restrict:"M"  // Element Level, Attribute Level , Class Level
    }
});