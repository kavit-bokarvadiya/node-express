// creation of http module :: creation of a server

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.write('<h1>hello world</h1>');
    }
    res.end();
});

server.listen(5002);
console.log('the http server is running on port 5002');