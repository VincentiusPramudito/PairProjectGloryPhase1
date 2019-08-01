const Menu = require('../models/menu')
const Customer = require('../models/customer')

class CustomerController {
    static All(req, res) {
        Customer.findAll()
            .then(data => {
                res.render('customer', {
                    data
                })
                console.log(data)
            })
            .catch(err => {
                res.send(err)
                console.log(`ini ${err} woooooiiii`)
            })
    }
    static register(req, res) {
        res.send('register')
    }

    static create(req, res) {
        Customer.create(req.body)
            .then(data => {
                res.redirect('/')
            })
            .catch(err => {
                res.send(err)
            })
    }
    static delete(req, res) {
        Customer.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(data => {
                res.redirect('/customer')
            })
    }
    static update(req, res) {
        Customer.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            .then(data => {
                res.redirect('/customer')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static purchase(req, res) {
        Menu.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            .then(data => {
                res.redirect('/customer')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static transaction(req, res) {
        Menu.findByPk(req.body.orderId) // ini ordernya nanti dinamakan dari ejsnya /* kindly reminder takut lupa */
            .then(data => {
                Transactions.create({
                    CustomerId: req.params.id,
                    orderId: req.body.orderId
                })
            })
            .then(data2 => {
                res.redirect(`/customer/${req.params.id}/buy`)
            })
            .catch(err => {
                res.send(err)
            })
    }
    static invoice(req, res) {
        Customer.findByPk(req.params.id)
            .then(data => {
                Transactions.findAll({
                        where: {
                            customerId: data.id
                        },
                        include: {
                            model: Menu
                        }
                    })
                    .then(data1 => {
                        let total = 0
                        for (let i = 0; i < data1.length; i++) {
                            total += data1[i]
                        }
                        res.send('invoice', {
                            data,
                            data1,
                            total
                        })
                    })
                    .catch(err => {
                        res.send(err)
                    })
            })
    }
}

module.exports = CustomerController