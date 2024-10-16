//MyPage

var http = require("http"); 
var fs = require("fs");
const port = 8000; 

http.createServer(function(req, res) { 
    //res.writeHead(200, { "Content-Type": "text/plain" });
    //res.end("This is Jolly's page!");
    res.writeHead(200, { "Content-Type": "text/html" });
    let image = fs.readFileSync(__dirname + '/MyPage/hello.png').toString('base64');
    res.write(`
        <html>
            <head>
                <title>Jolly's Page</title>
            </head>
            <body>
                <h1>Welcome to Jolly's Page!</h1>
                <p>blah blah blah!</p>
                <img src="data:image/png;base64,${image}" alt="Jolly's Image" />
            </body>
        </html>
    `);
    res.end();
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
});