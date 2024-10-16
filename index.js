//MyPage

var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/plain" });
    //res.end("This is Jolly's page!");
    res.write(`
        <html>
            <head>
                <title>Jolly's Page</title>
            </head>
            <body>
                <h1>Welcome to Jolly's Page!</h1>
                <p>blah blah blah!</p>
            </body>
        </html>
    `);
    res.end();
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
});