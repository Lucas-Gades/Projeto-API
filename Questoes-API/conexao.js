const {Client} = require('pg');

const conexao = {
    host: "localhost",
    port: 5432,
    database: "questoesapi",
    user: "postgres", 
    password: "359461"
}

module.exports = conexao;