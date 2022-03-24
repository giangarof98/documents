const friendsModel = require('../model/friend.model')

function postFriend(req,res){
    if(!req.body.name){
        return res.status(404).json({ error: 'Missing name' })
    }
    const addFriend = {
        id: friendsModel.length,
        name : req.body.name,
    };
    friends.push(addFriend);
    res.json(addFriend);
}

function getAll(req,res) {
    res.json(friendsModel)
}

function getOne (req,res) {
    const friendId =  req.params.friendId;
    const friend = friendsModel[friendId];
    if(friend){
        res.json(friend)
    } else {
        res.status(404).json({
            error: 'Friend doesnt existe'
        })
    }
}

module.exports= {
    postFriend,
    getAll,
    getOne
}