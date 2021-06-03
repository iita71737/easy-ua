const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(3000, () => {
    console.log(`app is running on http://localhost:${port}`)
})