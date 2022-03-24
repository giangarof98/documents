const express = require('express')
const router = express.Router()
const MsgController = require('../controllers/msg.controller');

router.get('/', MsgController.getMsg)
router.post('/', MsgController.postMsg)

module.exports = router;