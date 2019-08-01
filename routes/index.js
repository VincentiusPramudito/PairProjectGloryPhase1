const routes = require('express').Router()
const Model = require('../models')
// const session = req('express-session')

// go to HomePage
routes.get('/', (req, res) => {
        res.render('home')
    })
    // go to HomePage

// go to RegisterPage
routes.get('/register', (req, res) => {
        res.render('register')
    })
    // go to RegisterPage

// // create new Customer
routes.post('/register', (req, res) => {
        Model.Customer.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            .then(() => {
                res.render('home')
            })
            .catch(err => {
                res.send(err)
            })
    })
    // create new Customer

// go to loginPage
routes.get('/login', (req, res) => {
        res.render('login')
    })
    // go to loginPage
routes.post('/login', (req,res)=>{

    Model.Customer.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
    .then(data =>{
        res.redirect(`/login/menu/${data.id}`)
    })
    .catch(err =>{
        res.send(err)
    })
})

routes.get('/login/menu/:id', (req,res)=>{
    console.log(req.params.id)
    Model.Menu.findAll()
    .then(data =>{
        res.render('menu', {values:data, UserId:req.params.id})
        // res.send(data)
    })
})
routes.post('/login/menu/:id', (req,res)=>{
    // console.log(req.params.id)
    // console.log(req.body.id, req.params.id)
    Model.Transaction.create({
        CustomerId: req.params.id,
        MenuId: req.body.id
    })
    .then(data =>{
        res.redirect(`${req.params.id}`)
    })
    .catch(err =>{
        res.send(err)
    })
})

routes.get('/login/menu/:id/checkout', (req,res)=>{
    Promise.all([
        Model.Menu.findAll(),
        Model.Transaction.findAll(),
        Model.Customer.findAll()
    ])
    .then(datas =>{
        res.render('invoice')
        // res.send(datas)
    })
    .catch(err =>{
        res.send(err)
    })
})


routes.get('/login/:id/transaction', (req,res)=>{
    Model.Transaction.create({
        CustomerId: req.params.id
    })
    .then(()=>{

    })
})

module.exports = routes