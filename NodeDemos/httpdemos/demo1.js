var http = require("http");
var fs = require("fs");
var path = require("path");
http.createServer(handleRequestResponse).listen(1234,function(){
    console.log("Server Start ....");
});

function isStaticFile(url){
    var staticThings = [".html",".jpg",".jpeg",".css",".js",".mp3"];
    var extension = path.extname(url);
    console.log("Extension is "+extension);
    return staticThings.indexOf(extension)>=0;
}

function handleRequestResponse(request,response){
    response.writeHead(200,{"contentType":"text/html"});
    var url = request.url;
    var method = request.method;
    console.log("URL is ",url);
   // if(url==='/home' && method ==='GET'){
    if(isStaticFile(url)){
        var newPath = path.join('public'+url);
        console.log("NewPath is ",newPath);
        fs.readFile(newPath,function(err,content){
            response.end(content);
        });
    }
    else{
        response.end("<h1>Hey this is another request</h1>");
    }
}