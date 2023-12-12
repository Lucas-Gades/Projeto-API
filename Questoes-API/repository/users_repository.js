const { Pool } = require('pg');

const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "api_questoes",
    user: "postgres",
    password: "21312804"
});

async function listarUsuarios() {
    const res = await pool.query('SELECT id, nome FROM usuario');
    return res.rows;
}

async function cadastrarUsuario(usuario) {
    await pool.query('INSERT INTO usuario (nome, usuario, senha) VALUES ($1, $2, $3)', [usuario.nome, usuario.usuario, usuario.senha]);
}

async function atualizarUsuario(id, usuario) {
    await pool.query('UPDATE usuario SET nome = $1, usuario = $2, senha = $3 WHERE id = $4', [usuario.nome, usuario.usuario, usuario.senha, id]);
}

async function deletarUsuario(id) {
    await pool.query('DELETE FROM usuario WHERE id = $1', [id]);
}

async function buscarUsuarioId(id) {
    const res = await pool.query('SELECT id, nome, usuario FROM usuario WHERE id = $1', [id]);
    return res.rows[0];
}

async function buscarUsuarioPorUsuario(username) {
    const res = await pool.query('SELECT * FROM usuario WHERE usuario = $1', [username]);
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
