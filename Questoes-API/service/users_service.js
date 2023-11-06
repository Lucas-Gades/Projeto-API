const usuarioRepository = require('../repository/users_repository')

// Listar todos os usuários , mas somente , nome , usuario e id
function listarUsuarios() {
    return usuarioRepository.listarUsuarios();
}

// Cadastrar um usuário
function cadastrarUsuario(usuario) {
    if (usuario && usuario.nome && usuario.usuario && usuario.senha) {
        usuarioRepository.cadastrarUsuario(usuario);
    } else {
        throw { id: 400, message: "Usuário não possui nome, email ou senha" };
    }
}

// Atualizar um usuário
function atualizarUsuario(id, usuario) {
    if (usuario && usuario.nome && usuario.usuario && usuario.senha) {
        return usuarioRepository.atualizarUsuario(id, usuario);
    } else {
        throw { id: 400, message: "Usuário não possui nome, email ou senha" };
    }
}

// Deletar um usuário
function deletarUsuario(id) {
    const usuario = usuarioRepository.buscarUsuarioId(id);
    if (usuario) {
        usuarioRepository.deletarUsuario(id);
    } else {
        throw { id: 404, message: "Usuário não encontrado" };
    }
}


// Buscar um usuário por ID
function buscarUsuarioId(id) {
    const usuario = usuarioRepository.buscarUsuarioId(id);
    if(usuario) {
        return usuario;
    }
    else {
        throw {id:404, message:"Usuário nao encontrado"};
    }
}

module.exports = {
    listarUsuarios,
    cadastrarUsuario,
    atualizarUsuario,
    deletarUsuario,
    buscarUsuarioId
};
