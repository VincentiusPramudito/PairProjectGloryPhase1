'use strict';
let beverages = [{
        name: "kopi susuku",
        harga: 10000,
        createdAt: new Date,
        updatedAt: new Date
    }, {
        name: "kopi susumu",
        harga: 13000,
        createdAt: new Date,
        updatedAt: new Date

    }, {
        name: "matchadori",
        harga: 7500,
        createdAt: new Date,
        updatedAt: new Date

    },
    {
        name: "lychee splash",
        harga: 12000,
        createdAt: new Date,
        updatedAt: new Date

    },
    {
        name: "kopi susu avocado",
        harga: 7500,
        createdAt: new Date,
        updatedAt: new Date

    },
    {
        name: "kopi kafe",
        harga: 15000,
        createdAt: new Date,
        updatedAt: new Date

    }
]





module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Menus', beverages, {});

    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Menus', beverages, {});
    }
};