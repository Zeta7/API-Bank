const { DataTypes } = require('sequelize');
const { dataBase } = require('../utils/DataBase');

const Transfer = dataBase.define('transfer', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    senderUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    receiverUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = { Transfer };
