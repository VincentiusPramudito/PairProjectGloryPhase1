const routes = require('express').Router()
const Model = require('../models')

// go to HomePage
routes.get('/', (req, res) => {
        res.render('home')
    })
    // go to HomePage

// go to RegisterPage
routes.get('/register', (req, res) => {
        res.render('halamanRegister????')
    })
    // go to RegisterPage

// create new Customer
routes.post('/register', (req, res) => {
        Model.Customer.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            .then(() => {
                res.send('Syudah daptarr')
            })
            .catch(err => {
                res.send(err)
            })
    })
    // create new Customer

// go to loginPage
routes.get('/login', (req, res) => {
        Model.Customer.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(data => {
                if (data.password == req.body.password) {
                    res.send('Halaman User..')
                }
            })
            .catch(err => {
                res.send(err)
            })
    })
    // go to loginPage


routes.get('/login/:id/transaction', (req, res) => {
    Model.Transaction.create({
            CustomerId: req.params.id
        })
        .then(() => {

        })
})

routes.get('/')

module.exports = routes