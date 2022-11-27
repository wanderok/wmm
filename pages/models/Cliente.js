const Sequelize = require('sequelize');
const db = require('./db');

const Cliente = db.define('clientes',{
    CODIGO: {
        type:Sequelize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true,
    },
    TIPO: {
        type: Sequelize.STRING(15),
        allowNull: false,
    },
    NOME: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    FANTASIA: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    RG_IE: {
        type: Sequelize.STRING(20),
        allowNull: false,
    },
	CPF_CNPJ: {
        type: Sequelize.STRING(20),
        allowNull: false,
    },
	FONE: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
	FAX: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
	ENDERECO: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
	NRO: {
        type: Sequelize.STRING(05),
        allowNull: false,
    },
	COMPLEMENTO: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
	BAIRRO: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
	CIDADE: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
	CODMUNICIPIO: {
        type: Sequelize.STRING(10),
        allowNull: false,
    },
	UF: {
        type: Sequelize.STRING(02),
        allowNull: false,
    },
	CEP: {
        type: Sequelize.STRING(10),
        allowNull: false,
    },
	CONTATO: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
	EMAIL: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
	REFERENCIA: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
	PRODUTOS: {
        type: Sequelize.STRING(10),
        allowNull: false,
    },
	DATA_CADASTRO: {
        type: Sequelize.DATE,
        allowNull: false,
    },
	DIA_PAG: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
	VALIDADE_SOFT: {
        type: Sequelize.DATE,
        allowNull: false,
    },
	OBS1: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
	OBS2: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
	VALOR: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
	STATUS: {
        type: Sequelize.STRING(08),
        allowNull: false,
    },
	REGISTRO: {
        type: Sequelize.STRING(10),
        allowNull: false,
    },
	DESCARREGA_TXT: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

// cria a tabela se não existir
//User.sync();
//Cliente.sync({alter: true});

module.exports = Cliente;
