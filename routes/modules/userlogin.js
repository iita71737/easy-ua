const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    const data = req.body

    const users = [
        {
        firstName: 'Tony',
        email: 'tony@stark.com',
        password: 'iamironman'
        },
        {
        firstName: 'Steve',
        email: 'captain@hotmail.com',
        password: 'icandothisallday'
        },
        {
        firstName: 'Peter',
        email: 'peter@parker.com',
        password: 'enajyram'
        },
        {
        firstName: 'Natasha',
        email: 'natasha@gamil.com',
        password: '*parol#@$!'
        },
        {
        firstName: 'Nick',
        email: 'nick@shield.com',
        password: 'password'
        }
        ]
        console.log('data',data)

     const match_array = users.filter( user => {
         return ( ( user.email === data.user) && (user.password === data.pwd))
     })

    const obj = [] 
    match_array.forEach( item => { obj.push(item) })

    console.log(obj[0] )

     if (obj[0]) {
         console.log('suce')
        res.render('success', { obj : obj[0] } )
     } else {
         console.log('error')
        res.render('index')
     }
})

module.exports = router