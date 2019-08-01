const routes = require('express').Router()
const Model = require('../models')
// const session = req('express-session')

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

routes.post('/login', (req,res)=>{
    console.log(req.body)
    Model.Customer.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(data =>{
        console.log(data)
        if(data[0].password == req.body.password){
            res.send(data)
        }
    })
    .catch(err =>{
        res.send(err)
    })
})

routes.get('/login/menu', (req,res)=>{
    res.render('menu')
})


routes.get('/login/:id/transaction', (req,res)=>{
    Model.Transaction.create({
        CustomerId: req.params.id
    })
    .then(()=>{

    })
})

routes.get('/summary', (req,res)=>{
    Model.MenuTransaction.findAll()
    .then(datas =>{
        res.send(datas)
    })
})

module.exports = routes