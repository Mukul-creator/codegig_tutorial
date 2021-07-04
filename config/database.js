const {Sequelize}  = require('sequelize');
module.exports = new Sequelize('codegig', 'postgres', '1604', {
    host: 'localhost',
    dialect: 'postgres' 
});
