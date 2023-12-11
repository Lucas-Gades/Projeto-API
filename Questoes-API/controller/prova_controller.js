const provaService = require('../service/prova_service');

async function buscarProvaPorId(req, res) {
  const id = parseInt(req.params.id);
  try{
      const prova = await provaService.buscarProvaPorId(id);
      res.json(prova);
  } catch(err){
      res.status(err.id).json({msg:err.message});
  }
}


async function gerarProvaAleatoriaCom10Questoes(req, res) {
    try {
      const prova = await provaService.gerarProvaAleatoriaCom10Questoes();
      res.json(prova);
    } catch (err) {
      res.status(err.id).json({ msg: err.message });
    }
  }



async function gerarProvaComNQuestoes(req, res) {
    const quantidadeDeQuestoes = parseInt(req.params.quantidade);
    try {
      const prova = await provaService.gerarProvaComNQuestoes(quantidadeDeQuestoes); 
      res.json(prova);
    } catch (err) {
      res.status(err.id).json({ msg: err.message });
    }
  }

async function gerarProvaComNQuestoesDeUmaBanca(req, res) {
    const quantidadeDeQuestoes = req.params.quantidade;
    const banca = req.params.banca;
  
    try {
      const prova = await provaService.gerarProvaComNQuestoesDeUmaBanca(quantidadeDeQuestoes, banca);
      res.json(prova);
    } catch (err) {
      res.status(err.id).json({ msg: err.message });
    }
  }
  
async function gerarProvaComNQuestoesDeUmaDisciplina(req, res) {
    const quantidadeDeQuestoes = req.params.quantidade;
    const disciplina = req.params.disciplina;
  
    try {
      const prova = await provaService.gerarProvaComNQuestoesDeUmaDisciplina(quantidadeDeQuestoes, disciplina);
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
  
