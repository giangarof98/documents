const express = require('express')
const app = express()
const routerFriend = require('./routes/friends.routes');
const routerMsg = require('./routes/msg.routes')
const port = 3000;
const path =require('path')

//Middleware
app.use((req,res,next) => {
    const start = Date.now();
    console.log(`${req.method}, ${req.url}`)
    next()
})

app.set('view engine', 'hbs') //set engine for handle bars
app.set('views', path.join(__dirname,'views')) 
app.use('/site', express.static('public')) //serve static files, imgs
app.use(express.json()) //json parser

app.get('/hbs', (req,res) => {
    res.render('index', {
        title: 'hbs title',
        caption: 'ring pic'
    })
})
app.use('/friends', routerFriend);
app.use('/msg', routerMsg);


app.listen(port, () => {
    console.log(`serving on port ${port}`)
})