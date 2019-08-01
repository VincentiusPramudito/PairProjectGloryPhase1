'use strict';
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model
    class MenuTransaction extends Model {}
    MenuTransaction.init({
        TransactionId: DataTypes.INTEGER,
        MenuId: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER
    }, {
        sequelize
    });
    MenuTransaction.associate = function(models) {
        // associations can be defined here
    };
    return MenuTransaction;
};