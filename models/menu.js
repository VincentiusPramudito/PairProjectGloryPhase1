'use strict';
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model
    class Menu extends Model {}
    Menu.init({
        name: DataTypes.STRING,
        harga: DataTypes.INTEGER
    }, {
        sequelize
    });
    Menu.associate = function(models) {
        // associations can be defined here
    Menu.belongsToMany(models.Transaction, { through: models.MenuTransaction })
    };
    return Menu;
};