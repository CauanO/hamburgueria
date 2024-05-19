const { type } = require('os'); 
const db = require('./db');

const Pessoas = db.sequelize.define('clientes', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    cep: {
        type: db.Sequelize.STRING
    },
    logradouro: {
        type: db.Sequelize.STRING
    },
    uf: {
        type: db.Sequelize.STRING
    },
    mensagem: {
        type: db.Sequelize.STRING
    }
})

module.exports = Pessoas

// Pessoas.sync({force: true})