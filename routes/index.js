const routes = require('express').Router()
const Model = require('../models')

// go to HomePage
routes.get('/', (req,res)=>{
    res.render('home')
})
// go to HomePage

// go to RegisterPage
routes.get('/register', (req,res)=>{
    res.render('register')
})
// go to RegisterPage

// // create new Customer
routes.post('/register', (req,res)=>{
    Model.Customer.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    .then(()=>{
        res.render('home')
    })
    .catch(err =>{
        res.send(err)
    })
})
// create new Customer

// go to loginPage
routes.get('/login', (req,res)=>{
    res.render('login')
})
// go to loginPage


routes.get('/login/:id/transaction', (req,res)=>{
    Model.Transaction.create({
        CustomerId: req.params.id
    })
    .then(()=>{

    })
})

routes.get('/')

module.exports = routes