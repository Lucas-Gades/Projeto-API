const { Client } = require('pg');
const conexao = require('../conexao');
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function listarUsuarios() {
    const client = new Client(conexao);
    await client.connect();
    const res = await client.query('SELECT id, nome FROM usuario');
    await client.end();
    return res.rows;
}

async function cadastrarUsuario(usuario) {
    const client = new Client(conexao);
    await client.connect();
    // Hash de senha:
    const senhaHash = await bcrypt.hash(usuario.senha, saltRounds);
    // Hash de senha
    await client.query('INSERT INTO usuario (nome, usuario, senha) VALUES ($1, $2, $3)', [usuario.nome, usuario.usuario, senhaHash]);
    await client.end();
}

async function atualizarUsuario(id, usuario) {
    const client = new Client(conexao);
    await client.connect();
    // Hash de senha:
    const senhaHash = await bcrypt.hash(usuario.senha, saltRounds);
    // Hash de senha:
    await client.query('UPDATE usuario SET nome = $1, usuario = $2, senha = $3 WHERE id = $4', [usuario.nome, usuario.usuario, senhaHash, id]);
    await client.end();
}

async function deletarUsuario(id) {
    const client = new Client(conexao);
    await client.connect();
    await client.query('DELETE FROM usuario WHERE id = $1', [id]);
    await client.end();
}

async function buscarUsuarioId(id) {
    const client = new Client(conexao);
    await client.connect();
    const res = await client.query('SELECT id, nome, usuario FROM usuario WHERE id = $1', [id]);
    await client.end();
    return res.rows[0];
}

async function buscarUsuarioPorUsuario(username) {
    const client = new Client(conexao);
    await client.connect();
    const res = await client.query('SELECT * FROM usuario WHERE usuario = $1', [username]);
    await client.end();
    return res.rows[0];
}

module.exports = {
    listarUsuarios,
    cadastrarUsuario,
    atualizarUsuario,
    deletarUsuario,
    buscarUsuarioId,
    buscarUsuarioPorUsuario
};
