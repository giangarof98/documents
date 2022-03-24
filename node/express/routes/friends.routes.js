const express = require('express')
const router = express.Router()
const friendController = require('../controllers/friend.controller');

router.use((req,res,next) => {
    console.log('ip address is: ', req.ip)
    next()
})

router.post('/', friendController.postFriend)
router.get('/', friendController.getAll)
router.get('/:friendId', friendController.getOne)

module.exports = router;