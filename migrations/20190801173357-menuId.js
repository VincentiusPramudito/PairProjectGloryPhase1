'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.addColumn('Transactions', 'MenuId', {
            type: Sequelize.INTEGER
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Transactions', null);
    }
};