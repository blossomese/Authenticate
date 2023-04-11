// Schema
const Sequelize = require("sequelize");
const sequelize = require("../config/database.config");

const Registration = sequelize.define("Registration", {
    id: {
        type: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
     firstname: {
        type: Sequelize.STRING,
        allowNull: false,
     },
     lastname: {
        type: Sequelize.STRING,
        allowNull: false,
     },
     age: {
        type: Sequelize.STRING,
        allowNull: false,
     }, 
     email: {
        type: Sequelize.STRING,
         allowNull: false,
         unique: true,
     },
     address: {
        type: Sequelize.STRING,
        allowNull: false,
     },
     password: {
        type: Sequelize.STRING,
        allowNull: false,
     }
})

module.exports = Registration