const express = require('express')
const router = express.Router()
const usersController = require('../controller/users_controller')

router.get('/', usersController.listarUsuarios)
router.post('/', usersController.cadastrarUsuario)
router.get('/:id', usersController.buscarUsuarioId)
router.put('/:id', usersController.atualizarUsuario)
router.delete('/:id', usersController.deletarUsuario)

module.exports = router;
