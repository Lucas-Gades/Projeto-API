const express = require('express')
const router = express.Router()
const provaController = require('../controller/prova_controller')


router.get('/aleatoria', provaController.gerarProvaAleatoriaCom10Questoes)
router.get('/aleatoria/:quantidadeDeQuestoes/', provaController.gerarProvaComNQuestoes)
router.get('/aleatoria/banca/:banca/:quantidade', provaController.gerarProvaComNQuestoesDeUmaBanca)
router.get('/aleatoria/disciplina/:disciplina/:quantidade', provaController.gerarProvaComNQuestoesDeUmaDisciplina)
router.get('/buscarProva/:id', provaController.buscarProvaPorId)


module.exports = router;
