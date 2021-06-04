const express = require('express')
const router = express.Router()
const users = require('../../public/javascript/user')

router.get('/', ( req, res ) => {
    res.render('index')
})

module.exports = router