const Sequelize = require("sequelize");
const sequelize = new Sequelize('hamburgueria', 'root', '############', {
    host:"localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}