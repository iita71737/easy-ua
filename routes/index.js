const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const user = require('./modules/userlogin')

router.use('/', home)
router.use('/usercheck', user)

module.exports = router