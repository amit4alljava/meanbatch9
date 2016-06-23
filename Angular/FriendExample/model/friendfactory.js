app.factory("friendfactory",function(){
   var object = {
       getFriendsData:function(){
           //var friends=['Tom','Mike','Rim','Kim'];
           var friends = [
               {name:'Mike',phone:2222,city:'Delhi',pic:'../images/one.jpg'},
               {name:'Tom',phone:3333,city:'Mumbai',pic:'../images/two.jpg'},
               {name:'Rim',phone:1111,city:'NewYork',pic:'../images/three.jpg'},
               {name:'Kim',phone:1000,city:'Delhi',pic:'../images/one.jpg'}
           ]
           return friends;
       }
   };
    return object;
});