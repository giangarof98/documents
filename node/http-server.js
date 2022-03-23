const http = require('http');
const PORT = 3000;
const texts = [
    {
        id:0,
        text:'This is id 0'
    },
    {
        id:1,
        text:'this is id 1'
    }
]
const server = http.createServer((req,res) => {
    const text = req.url.split('/');
    if(req.method === 'POST' && text[1] === 'index'){
        req.on('data', (data) => {
            const addText = data.toString()
            console.log('Request: ', addText)
            texts.push(JSON.parse(addText))
        })
        req.pipe(res)
    } else if(req.method === 'GET' && text[1] === 'index'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        // res.end(JSON.stringify());
        if(text.length === 3){
            const textIndex = Number(text[2]);
            res.end(JSON.stringify(texts[textIndex]));
        } else{
            res.end(JSON.stringify(texts));
        }
    } else if(req.method === 'GET' && text[1] === 'msg'){
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