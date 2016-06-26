$(document).ready(init);  // Eager Way (DOM Load)
/*$(function(){
    
});*/
//$(init);
//$(window).load(init); // Lazy Way  (Page Load)
function init(){
    $("#add").click(addNewTask);
    //Static Event Binding
    /*$("#taskDesc").select(function(){
        alert("U Select the Desc");
    })*/
    $("#searchTask").click(function(){
       var searchArray =taskOperations.searchTask($("#taskName").val());
        $("#taskList").html("");
        searchArray.forEach(function(taskObject){
            $("#taskList").
            prepend("<li>"+taskObject.name+" "+taskObject.desc+"</li>");
        })
        // addNewTask();
        //alert("Blur Call");
    })
    $("#toggleDemo").click(function(){
        $("h1").toggleClass("style");
    });
    $("#taskList").on("dblclick","li",toggleTask);
    $("h1").hover(function(){
        $(this).toggleClass("style");
    })
    
    // Dynamic Event Binding (Live Event Binding)
    
}
function toggleTask(){
    $(this).toggleClass("completed");
        //alert("Toggle Task");
    }               

function addNewTask(){
    var taskName = $("#taskName").val();
    var taskDesc = $("#taskDesc").val();
    $("#taskList").prepend("<li>"+taskName+" "+taskDesc+"</li>");
    taskOperations.addTask(taskName,taskDesc);
    /*$("li").click(function(){
       alert("U Click on Li",$(this).html()); 
    });*/
   // $("#taskList").append("<li>"+taskName+" "+taskDesc+"</li>");
}