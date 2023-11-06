const usersService = require('../service/usuario_service');


function listarUsuarios(req, res) {
    try {
        const users = usersService.listarUsuarios();
        res.status(200).json(users);
    } catch (err) {
        res.status(err.id).json({ msg: err.message });
    }
}

function cadastrarUsuario(req, res) {
    const user = req.body;
    try {
        usersService.cadastrarUsuario(user);
        res.status(201).json({ msg: "Usuário criado com sucesso" });
    } catch (err) {
        res.status(err.id).json({ msg: err.message });
    }
}

function atualizarUsuario(req, res) {
    const id = req.params.id;
    const user = req.body;
    try {
        usersService.atualizarUsuario(id, user);
        res.status(200).json({ msg: "Usuário atualizado com sucesso" });
    } catch (err) {
        res.status(err.id).json({ msg: err.message });
    }
}

function deletarUsuario(req, res) {
    const id = parseInt(req.params.id);
    try {
        usersService.deletarUsuario(id);
        res.status(200).json({ msg: "Usuário deletado com sucesso" });
    } catch (err) {
        res.status(err.id).json({ msg: err.message });
    }
}

function buscarUsuarioId(req, res) {
    const id = parseInt(req.params.id);
    try {
        const user = usersService.buscarUsuarioId(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(err.id).json({ msg: err.message });
    }
}

module.exports = {
    listarUsuarios,
    cadastrarUsuario,
    atualizarUsuario,
    deletarUsuario,
    buscarUsuarioId
};
