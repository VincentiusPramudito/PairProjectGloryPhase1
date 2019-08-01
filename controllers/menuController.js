class MenuController {
    static All(req, res) {
        Menu.findAll()
            .then(data => {
                res.render('menu', data)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static add(req, res) {
        res.render('addMenu')
    }

    static create(req, res) {
        Menu.create(req.body)
            .then(data => {
                res.redirect('/')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static delete(req, res) {
        Menu.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(data => {
                res.redirect('/menu')
            })
            .catch(err => {
                res.send(err)
            })
    }
}
// console.log(MenuController.showAll())


module.exports = MenuController