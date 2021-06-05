const express = require('express')
const router = express.Router()
const obj = [] 
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
       // console.log('data',data)

     const match_array = users.filter( user => {
         return ( ( user.email === data.user) && (user.password === data.pwd))
     })

   
    match_array.forEach( item => { obj.push(item) })

    //console.log(obj[0] )
     
     if (obj[0]) {
         console.log('suce')
            res.cookie('firstName', obj[0].firstName ,  { path: '/usercheck', signed: true, maxAge:600000} )
            res.cookie('email', obj[0].email ,  { path: '/usercheck', signed: true, maxAge:600000} )
            res.cookie('password', obj[0].password ,  { path: '/usercheck', signed: true, maxAge:600000} )
        res.status(200).render('success', { obj : obj[0] } )
     } else {
         console.log('error')
        res.status(200).render('index')
     }

})

let isLogin = false

router.get('/', (req, res) => {
    console.log(req.signedCookies)
    let name='guest';
    isLogin = false;
  
  if( req.signedCookies.email && req.signedCookies.password ) {
      　 name = req.signedCookies.firstName;
      isLogin = true;
  }
  res.render('success', { title: 'Express', name : name, logstatus:isLogin })

})

module.exports = router