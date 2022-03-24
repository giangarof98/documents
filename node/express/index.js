const express = require('express')
const app = express()
const routerFriend = require('./routes/friends.routes');
const routerMsg = require('./routes/msg.routes')
const port = 3000;

//Middleware
app.use((req,res,next) => {
    const start = Date.now();
    console.log(`${req.method}, ${req.url}`)
    next()
})

app.use(express.json())

app.use('/friends', routerFriend);
app.use('/msg', routerMsg);


app.listen(port, () => {
    console.log(`serving on port ${port}`)
})