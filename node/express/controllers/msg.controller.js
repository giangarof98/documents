const path = require('path');

function getMsg(req,res) {
    const imgPath = path.join(__dirname, '..', 'public', 'img', 'pic.jpg')
    res.sendFile(imgPath)
    // res.send(`
    //     <div>
    //         <h1>List</h1>
    //         <ul>
    //             <li>Oreo</li>
    //             <li>Nutella</li>
    //             <li>Chocolate</li>
    //         </ul>
    //     </div>
    // `)
}

function postMsg (req,res) {
    console.log('updating...')
}

module.exports ={
    getMsg,
    postMsg
}