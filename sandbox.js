const Model = require('./models')
// Model.Customer.findAll({
//     where: {
//         email: 'Herlambang@biznet'
//     }
// })
// .then(data =>{
//     console.log(data)
    
// })

Model.Customer.findOne({
    where: {
        email: 'Herlambang@biznet'
    }
})
.then(data =>{
    console.log(data.password)
    if(data.password === 777){
        console.log('benar', data)
    }
})