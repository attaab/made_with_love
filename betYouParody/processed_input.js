var http = require("http");
var url = require("url");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/html"});
    var params = url.parse(request.url,true).query;

    console.log(params);

    var a = params.number1;
    var b = params.number2;


    var sum = a + b;

    response.write(sum);
    response.end();
}).listen(8080);