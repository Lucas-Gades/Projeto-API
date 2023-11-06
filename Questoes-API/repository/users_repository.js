const listaDeUsuarios = [
    {
        id: 1,
        nome: 'Fulano 1',
        usuario: 'fulano1',
        senha: 'senha1'
    },
    {
        id: 2,
        nome: 'Ciclano 2',
        usuario: 'ciclano2',
        senha: 'senha2'
    },
    {
        id: 3,
        nome: 'Beltrano 3',
        usuario: 'beltrano3',
        senha: 'senha3'
    },
    {
        id: 4,
        nome: 'Usuário 4',
        usuario: 'usuario4',
        senha: 'senha4'
    },
    {
        id: 5,
        nome: 'Teste 5',
        usuario: 'teste5',
        senha: 'senha5'
    }
];

let idGerador = 1;

//Listar Users

function listarUsuarios() {
    return listaDeUsuarios;
}

//Cadastrar Usuário

function cadastrarUsuario(usuario) {
    usuario.id = idGerador;
    listaDeUsuarios.push(usuario);
    idGerador++;
}

function atualizarUsuario(id, usuario) {
    let usuarioEncontrado = buscarUsuarioId(id);
    if (usuarioEncontrado) {
        usuarioEncontrado.nome = usuario.nome;
        usuarioEncontrado.usuario = usuario.usuario;
        usuarioEncontrado.senha = usuario.senha;
        return usuarioEncontrado; // Retorne o usuário atualizado
    } else {
        return null; // Retorne null se o usuário não for encontrado
    }
}

//Deletar Usuário

function deletarUsuario(id) {
    let usuarioEncontrado = buscarUsuarioId(id);
    if (usuarioEncontrado) {
        let indiceUsuario = listaDeUsuarios.indexOf(usuarioEncontrado);
        listaDeUsuarios.splice(indiceUsuario, 1);
    }
    return usuarioEncontrado;
}

//Buscar Usuário por ID

function buscarUsuarioId(id) {
    return listaDeUsuarios.find((usuario) => {
        return usuario.id === (id);
    });
}
//Buscar Usuário por Username

function buscarUsuarioPorUsername(username) {
    return listaDeUsuarios.find((usuario) => {
        return usuario.usuario === username;
    });
}


module.exports = {
    listarUsuarios,
    cadastrarUsuario,
    atualizarUsuario,
    deletarUsuario,
    buscarUsuarioId,
    buscarUsuarioPorUsername
};