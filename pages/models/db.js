//const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
//const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
//const sequelize = new Sequelize({
//  dialect: 'sqlite',
//  storage: 'path/to/database.sqlite'
//});

// Option 3: Passing parameters separately (other dialects)
//const sequelize = new Sequelize('database', 'username', 'password', {
//  host: 'localhost',
//  dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
//});
_host= '172.106.0.110:3306'
_port= 3306
_user= 'sa'
_password= 'Ab10203040@'
_db= 'brena'

const { Sequelize } = require('sequelize');
/*
const sequelize = new Sequelize (_db,_user,_host,{
    host: _host,
    dialect: 'mysql'
});
*/
const sequelize = new Sequelize ('brena','sa','Ab10203040@',{
    host: '172.106.0.110',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Sucesso: conetado ao banco de dados");
}).catch(function(){
    console.log("Erro: conexão falhou")
})
module.exports = sequelize;
