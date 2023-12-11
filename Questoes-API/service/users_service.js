const usuarioRepository = require('../repository/users_repository')

async function listarUsuarios() {
    return await usuarioRepository.listarUsuarios();
}

async function cadastrarUsuario(usuario) {
    if (usuario && usuario.nome && usuario.usuario && usuario.senha) {
        await usuarioRepository.cadastrarUsuario(usuario);
    } else {
        throw { id: 400, message: "Usuário não possui nome, usuário ou senha" };
    }
}

async function atualizarUsuario(id, usuario) {
    if (usuario && usuario.nome && usuario.usuario && usuario.senha) {
        await usuarioRepository.atualizarUsuario(id, usuario);
    } else {
        throw { id: 400, message: "Usuário não possui nome, usuário ou senha" };
    }
}

async function deletarUsuario(id) {
    const usuario = await usuarioRepository.buscarUsuarioId(id);
    if (usuario) {
        await usuarioRepository.deletarUsuario(id);
    } else {
        throw { id: 404, message: "Usuário não encontrado" };
    }
}

async function buscarUsuarioId(id) {
    const usuario = await usuarioRepository.buscarUsuarioId(id);
    if(usuario) {
        return {
            id: usuario.id,
            nome: usuario.nome,
        }
    }
    else {
        throw {id: 404, message: "Usuário não encontrado"};
    }
}

module.exports = {
    listarUsuarios,
    cadastrarUsuario,
    atualizarUsuario,
    deletarUsuario,
    buscarUsuarioId
};
