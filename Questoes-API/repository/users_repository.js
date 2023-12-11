const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'questoesapi',
    password: '359461',
    port: 5432,
});

async function listarUsuarios() {
    const res = await pool.query('SELECT id, nome, usuario FROM usuarios');
    return res.rows;
}

async function cadastrarUsuario(usuario) {
    await pool.query('INSERT INTO usuarios (nome, usuario, senha) VALUES ($1, $2, $3)', [usuario.nome, usuario.usuario, usuario.senha]);
}

async function atualizarUsuario(id, usuario) {
    await pool.query('UPDATE usuarios SET nome = $1, usuario = $2, senha = $3 WHERE id = $4', [usuario.nome, usuario.usuario, usuario.senha, id]);
}

async function deletarUsuario(id) {
    await pool.query('DELETE FROM usuarios WHERE id = $1', [id]);
}

async function buscarUsuarioId(id) {
    const res = await pool.query('SELECT id, nome, usuario FROM usuarios WHERE id = $1', [id]);
    return res.rows[0];
}

async function buscarUsuarioPorUsuario(username) {
    const res = await pool.query('SELECT * FROM usuarios WHERE usuario = $1', [username]);
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
