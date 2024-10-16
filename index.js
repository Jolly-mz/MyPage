//MyPage

var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is Jolly's page!");
    res.writeHead(150, { "Content-Type": "text/plain" });
    res.end("Welcome to my page... blah blah blah");
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
});