//Require http module
// -Differents ways to make a request: http, request, get 
// const http = require('https');
// const {request} = require('https'); 
const {get} = require('https');

//Request http
//Second argument is the callback,
//which is a arrow function that return
//the response
// const req = request('https://www.google.com', (res) => {
//     res.on('data', (chunck) => {
//         console.log(`This is the data ${chunck}`)
//     });
//     res.on('end', () => {
//         console.log('no more data')
//     })
// });

get('https://www.google.com', (res) => {
    res.on('data', (chunck) => {
        console.log(`This is the data ${chunck}`)
    });
    res.on('end', () => {
        console.log('no more data')
    })
});

//Req.end() make sure the function is being called
// req.end();