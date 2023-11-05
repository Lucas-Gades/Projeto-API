const provaService = require('../service/prova_service');

function buscarProvaPorId(req, res) {
  const id = parseInt(req.params.id);
  try{
      const prova = provaService.buscarProvaPorId(id);
      res.json(prova);
  } catch(err){
      res.status(err.id).json({msg:err.message});
  }
}


function gerarProvaAleatoriaCom10Questoes(req, res) {
    try {
      const prova = provaService.gerarProvaAleatoriaCom10Questoes();
      res.json(prova);
    } catch (err) {
      res.status(err.id).json({ msg: err.message });
    }
  }

function gerarProvaComNQuestoes(req, res) {
    const quantidadeDeQuestoes = req.params.quantidade;
  
    try {
      const prova = provaService.gerarProvaComNQuestoes(quantidadeDeQuestoes); 
      res.json(prova);
    } catch (err) {
      res.status(err.id).json({ msg: err.message });
    }
  }

function gerarProvaComNQuestoesDeUmaBanca(req, res) {
    const quantidadeDeQuestoes = req.params.quantidade;
    const banca = req.params.banca;
  
    try {
      const prova = provaService.gerarProvaComNQuestoesDeUmaBanca(quantidadeDeQuestoes, banca);
      res.json(prova);
    } catch (err) {
      res.status(err.id).json({ msg: err.message });
    }
  }
  
function gerarProvaComNQuestoesDeUmaDisciplina(req, res) {
    const quantidadeDeQuestoes = req.params.quantidade;
    const disciplina = req.params.disciplina;
  
    try {
      const prova = provaService.gerarProvaComNQuestoesDeUmaDisciplina(quantidadeDeQuestoes, disciplina);
      res.json(prova);
    } catch (err) {
      res.status(err.id).json({ msg: err.message });
    }
  }


  module.exports = {
    gerarProvaAleatoriaCom10Questoes,
    gerarProvaComNQuestoes,
    gerarProvaComNQuestoesDeUmaBanca,
    gerarProvaComNQuestoesDeUmaDisciplina,
    buscarProvaPorId
}
  
