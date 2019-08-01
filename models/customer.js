'use strict';
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model
    class Customer extends Model {}
    Customer.init({
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        role: DataTypes.STRING
    }, {
        sequelize
    });
    Customer.associate = function(models) {
        // associations can be defined here
    // Customer.belongsTo(models.Transaction)
    };
    return Customer;
};