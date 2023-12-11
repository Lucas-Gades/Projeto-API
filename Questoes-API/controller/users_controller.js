const usersService = require('../service/users_service');

async function listarUsuarios(req, res) {
    try {
        const users = await usersService.listarUsuarios();
        res.status(200).json(users);
    } catch (err) {
        res.status(err.id || 500).json({ msg: err.message || 'Erro ao listar usuários.' });
    }
}

async function cadastrarUsuario(req, res) {
    const user = req.body;
    try {
        await usersService.cadastrarUsuario(user);
        res.status(201).json({ msg: "Usuário criado com sucesso." });
    } catch (err) {
        res.status(err.id || 500).json({ msg: err.message || 'Erro ao cadastrar o usuário.' });
    }
}

async function atualizarUsuario(req, res) {
    const id = req.params.id;
    const user = req.body;
    try {
        await usersService.atualizarUsuario(id, user);
        res.status(200).json({ msg: "Usuário atualizado com sucesso." });
    } catch (err) {
        res.status(err.id || 500).json({ msg: err.message || 'Erro ao atualizar o usuário.' });
    }
}

async function deletarUsuario(req, res) {
    const id = parseInt(req.params.id);
    try {
        await usersService.deletarUsuario(id);
        res.status(200).json({ msg: "Usuário deletado com sucesso." });
    } catch (err) {
        res.status(err.id || 500).json({ msg: err.message || 'Erro ao deletar o usuário.' });
    }
}

async function buscarUsuarioId(req, res) {
    const id = parseInt(req.params.id);
    try {
        const user = await usersService.buscarUsuarioId(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ msg: "Usuário não encontrado." });
        }
    } catch (err) {
        res.status(err.id || 500).json({ msg: err.message || 'Erro ao buscar o usuário.' });
    }
}

module.exports = {
    listarUsuarios,
    cadastrarUsuario,
    atualizarUsuario,
    deletarUsuario,
    buscarUsuarioId
};
