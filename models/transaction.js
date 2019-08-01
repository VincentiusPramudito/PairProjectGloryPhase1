'use strict';
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model
    class Transaction extends Model {}
    Transaction.init({
        CustomerId: DataTypes.INTEGER,
        MenuId: DataTypes.INTEGER
    }, {
        sequelize
    });
    Transaction.associate = function(models) {
        // associations can be defined here
    Transaction.belongsTo(models.Customer)
    Transaction.belongsToMany(models.Menu, { through: models.MenuTransaction })
    };
    return Transaction;
};