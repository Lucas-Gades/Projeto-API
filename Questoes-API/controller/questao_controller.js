const questaoService = require('../service/questao_service');

function listarQuestoes(req , res) {
    const listarQuestoes = questaoService.listarQuestoes();
    res.json(listarQuestoes);
}

function cadastrarQuestao(req, res) {
    const questao = req.body;
    try{
        questaoService.cadastrarQuestao(questao);
        res.status(201).json({msg:'Questão Inserido Com Sucesso!'})

    } catch(err){
        res.status(err.id).json({msg:err.message});
    }
}

function buscarQuestaoId(req, res) {
    const id = parseInt(req.params.id);
    try{
        const questao = questaoService.buscarQuestaoId(id);
        res.json(questao);
    } catch(err){
        res.status(err.id).json({msg:err.message});
    }
}

function buscarQuestaoDisciplina(req, res) {
    const disciplina = req.params.disciplina;
    try{
        const questao = questaoService.buscarQuestaoDisciplina(disciplina);
        res.json(questao);
    } catch(err){
        res.status(err.id).json({msg:err.message});
    }
}

function buscarQuestaoBanca(req, res) {
    const banca = req.params.banca;
    try{
        const questao = questaoService.buscarQuestaoBanca(banca);
        res.json(questao);
    } catch(err){
        res.status(err.id).json({msg:err.message});
    }
}

function buscarQuestaoBancaEAno(req, res) {
    const banca = req.params.banca;
    const ano = parseInt(req.params.ano);
    try{
        const questao = questaoService.buscarQuestaoBancaEAno(banca, ano);
        res.json(questao);
    } catch(err){
        res.status(err.id).json({msg:err.message});
    }
}

function buscarQuestaoDisciplinaEBanca(req, res) {
    const disciplina = req.params.disciplina;
    const banca = req.params.banca;
    try{
        const questao = questaoService.buscarQuestaoDisciplinaEBanca(disciplina, banca);
        res.json(questao);
    } catch(err){
        res.status(err.id).json({msg:err.message});
    }
}

function atualizarQuestao(req, res) {
    const id = +req.params.id;
    let questao = req.body;
    try{
        questaoService.atualizarQuestao(id, questao);
        res.json({msg:'Questão atualizada com sucesso!'});
    } 
    catch(err){
        res.status(err.id).json({msg:err.message});
    }
}

function removerQuestaoId(req, res) {
    const id = +req.params.id;
    try{
        questaoService.removerQuestaoId(id);
        res.json({msg:'Questão deletada com sucesso!'});
    } catch(err){
        res.status(err.id).json({msg:err.message});
    }
}


function gerarProvaAleatoriaCom10Questoes(req, res) {
    try {
      const prova = questaoService.gerarProvaAleatoriaCom10Questoes();
      res.json(prova);
    } catch (err) {
      res.status(err.id).json({ msg: err.message });
    }
  }

function gerarProvaAleatoriaComNQuestoes(req, res) {
    const quantidadeDeQuestoes = req.params.quantidade;
  
    try {
      const prova = questaoService.gerarProvaAleatoriaComNQuestoes(quantidadeDeQuestoes); 
      res.json(prova);
    } catch (err) {
      res.status(err.id).json({ msg: err.message });
    }
  }

function gerarProvaAleatoriaComNQuestoesDeUmaBanca(req, res) {
    const quantidadeDeQuestoes = req.params.quantidade;
    const banca = req.params.banca;
  
    try {
      const prova = questaoService.gerarProvaAleatoriaComNQuestoesDeUmaBanca(quantidadeDeQuestoes, banca);
      res.json(prova);
    } catch (err) {
      res.status(err.id).json({ msg: err.message });
    }
  }
  
function gerarProvaAleatoriaComNQuestoesDeUmaDisciplina(req, res) {
    const quantidadeDeQuestoes = req.params.quantidade;
    const disciplina = req.params.disciplina;
  
    try {
      const prova = questaoService.gerarProvaAleatoriaComNQuestoesDeUmaDisciplina(quantidadeDeQuestoes, disciplina);
      res.json(prova);
    } catch (err) {
      res.status(err.id).json({ msg: err.message });
    }
  }
  

module.exports = {
    listarQuestoes,
    cadastrarQuestao,
    buscarQuestaoId,
    buscarQuestaoDisciplina,
    buscarQuestaoBanca,
    buscarQuestaoBancaEAno,
    buscarQuestaoDisciplinaEBanca,
    atualizarQuestao,
    removerQuestaoId,
    gerarProvaAleatoriaCom10Questoes,
    gerarProvaAleatoriaComNQuestoes,
    gerarProvaAleatoriaComNQuestoesDeUmaBanca,
    gerarProvaAleatoriaComNQuestoesDeUmaDisciplina
}