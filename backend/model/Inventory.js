const Sequelize = require('sequelize');
const sequelize=require('../utils/database');

const Inventory=sequelize.define('stock',{
    id: {
        type: Sequelize.INTEGER,
        notNull: true,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    quantity: {
        type: Sequelize.BIGINT
    },
    
})
module.exports = Inventory;