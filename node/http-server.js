const http = require('http');
const PORT = 3000;
const server = http.createServer((req,res) => {
    if(req.url === '/index'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({
            id:1,
            text:'Hello from the server'
        }));
    } else if(req.url === '/msg'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1>Hello</h1>')

        res.end()
    } else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1>page doesnt exist</h1>')
        res.end()

    }
    // res.writeHead(200, {
    //     // 'Content-Type': 'text/plain',
    //     'Content-Type': 'application/json',
    
    // });
    // res.end(JSON.stringify({
    //     id:1,
    //     text:'Hello from the server'
    // }));
})

server.listen(PORT, () => {
    console.log(`Listening from port ${PORT}`)
})