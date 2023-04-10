const Sequelize=require('sequelize');
const sequelize = new Sequelize('inventory', 'root', 'mysql', {
    dialect: 'mysql',
    host: 'localhost',
})
module.exports = sequelize;