const express = require('express')
const app = express()
const port = 3000
const methodOverride = require('method-override')
const routes = require('./routes')

const exphbs = require('express-handlebars')

app.use(express.urlencoded({ extended: true }))

app.engine('hbs', exphbs({ defaultLayout:'main', extname : '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.use(methodOverride('_method'))
app.use(routes)

app.listen(3000, () => {
    console.log(`app is running on http://localhost:${port}`)
})
