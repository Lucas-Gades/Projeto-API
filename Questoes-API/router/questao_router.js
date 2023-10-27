const express = require('express')
const router = express.Router()
const questaoController = require('../controller/questao_controller')

router.get('/', questaoController.listarQuestoes)
router.post('/', questaoController.cadastrarQuestao)
router.get('/:id', questaoController.buscarQuestaoId)
router.get('/disciplina/:disciplina', questaoController.buscarQuestaoDisciplina)
router.get('/banca/:banca', questaoController.buscarQuestaoBanca)
router.get('/banca/:banca/ano/:ano', questaoController.buscarQuestaoBancaEAno)
router.get('/disciplina/:disciplina/banca/:banca', questaoController.buscarQuestaoDisciplinaEBanca)
router.get('/gerarProva/aleatoria', questaoController.gerarProvaAleatoriaCom10Questoes)
router.get('/gerarProva/aleatoria/:quantidade', questaoController.gerarProvaAleatoriaComNQuestoes)
router.get('/gerarProva/aleatoria/banca/:banca/:quantidade', questaoController.gerarProvaAleatoriaComNQuestoesDeUmaBanca)
router.get('/gerarProva/aleatoria/disciplina/:disciplina/:quantidade', questaoController.gerarProvaAleatoriaComNQuestoesDeUmaDisciplina)
router.put('/:id', questaoController.atualizarQuestao)
router.delete('/:id', questaoController.removerQuestaoId)

module.exports = router;
