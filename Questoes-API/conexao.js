const {Client} = require('pg');

const conexao = {
    host: "localhost",
    port: 5432,
    database: "api_questoes",
    user: "postgres",
    password: "21312804"
}

function conectar(){
    const client = new Client(conexao);
    client.connect();
    return client;
}


module.exports = {
    conectar,
  };