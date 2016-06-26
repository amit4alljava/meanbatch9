function Task(name,desc){
this.name = name;
    this.desc = desc;
}

var taskOperations ={
    taskList:[],
    addTask:function(name , desc){
        var taskObject = new Task(name,desc);
        this.taskList.push(taskObject);
    },
    searchTask:function(name){
    var searchArray = this.taskList.filter(function(taskObject){
       return  taskObject.name.indexOf(name)>=0;
    });
        return searchArray;
    }
}