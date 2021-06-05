const express = require('express')
const router = express.Router()
let isLogin = false

router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router