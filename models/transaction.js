'use strict';
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model
    class Transaction extends Model {}
    Transaction.init({
        CustomerId: DataTypes.INTEGER,
    }, {
        sequelize
    });

    return Transaction;
};