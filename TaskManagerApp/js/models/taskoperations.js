var taskOperations = {
    taskList:[],
    taskId:0,
    addTask:function(name,desc){
        var taskObject = new Task(++this.taskId, name,desc);
        this.taskList.push(taskObject);
    },
    searchTask:function(taskId){
        for(var i = 0; i<this.taskList.length; i++){
            if(this.taskList[i].id==taskId){
                this.taskList[i].isCompleted = !this.taskList[i].isCompleted;
                break;
            }
        }
    }
}