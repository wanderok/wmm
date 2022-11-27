const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users',{
    id: {
        type:Sequelize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    pass: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    ativo: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    adm:  {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

// cria a tabela se não existir
//User.sync();
//User.sync({alter: true});

module.exports = User;