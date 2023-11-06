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


// Listar todos os usuários , mas somente , nome , usuario e id
function listarUsuarios() {
    return listaDeUsuarios.map((usuario) => {
        return {
            id: usuario.id,
            nome: usuario.nome,
        }
    });
}


function cadastrarUsuario(usuario) {
    usuario.id = idGerador;
    listaDeUsuarios.push(usuario);
    idGerador++;
}

function atualizarUsuario(id, usuario) {
    for(let ind in listaDeUsuarios){
        if(listaDeUsuarios[ind].id == id){
            listaDeUsuarios[ind].nome = usuario.nome;
            listaDeUsuarios[ind].usuario = usuario.usuario;
            listaDeUsuarios[ind].senha = usuario.senha;
            return;
        }
    }
}

function deletarUsuario(id) {
    let usuarioEncontrado = buscarUsuarioId(id);
    if (usuarioEncontrado) {
        let indiceUsuario = listaDeUsuarios.indexOf(usuarioEncontrado);
        listaDeUsuarios.splice(indiceUsuario, 1);
    }
    return usuarioEncontrado;
}


function buscarUsuarioId(id) {
    return listaDeUsuarios.find((usuario) => {
        return usuario.id == id;
    });
}



function buscarUsuarioPorUsuario(username) {
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
    buscarUsuarioPorUsuario
};