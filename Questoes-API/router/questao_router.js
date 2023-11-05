const express = require('express')
const router = express.Router()
const questaoController = require('../controller/questao_controller')

router.get('/', questaoController.listarQuestoes)
router.post('/', questaoController.cadastrarQuestao)
router.get('/:id', questaoController.buscarQuestaoPorId)
router.get('/disciplina/:disciplina', questaoController.buscarQuestaoPorDisciplina)
router.get('/banca/:banca', questaoController.buscarQuestaoPorBanca)
router.get('/banca/:banca/ano/:ano', questaoController.buscarQuestaoPorBancaEAno)
router.get('/disciplina/:disciplina/banca/:banca', questaoController.buscarQuestaoPorDisciplinaEBanca)
router.put('/:id', questaoController.atualizarQuestao)
router.delete('/:id', questaoController.removerQuestaoPorId)

module.exports = router;
