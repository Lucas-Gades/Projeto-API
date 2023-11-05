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

function buscarQuestaoPorId(req, res) {
    const id = parseInt(req.params.id);
    try{
        const questao = questaoService.buscarQuestaoPorId(id);
        res.json(questao);
    } catch(err){
        res.status(err.id).json({msg:err.message});
    }
}

function buscarQuestaoPorDisciplina(req, res) {
    const disciplina = req.params.disciplina;
    try{
        const questao = questaoService.buscarQuestaoPorDisciplina(disciplina);
        res.json(questao);
    } catch(err){
        res.status(err.id).json({msg:err.message});
    }
}

function buscarQuestaoPorBanca(req, res) {
    const banca = req.params.banca;
    try{
        const questao = questaoService.buscarQuestaoPorBanca(banca);
        res.json(questao);
    } catch(err){
        res.status(err.id).json({msg:err.message});
    }
}

function buscarQuestaoPorBancaEAno(req, res) {
    const banca = req.params.banca;
    const ano = parseInt(req.params.ano);
    try{
        const questao = questaoService.buscarQuestaoPorBancaEAno(banca, ano);
        res.json(questao);
    } catch(err){
        res.status(err.id).json({msg:err.message});
    }
}

function buscarQuestaoPorDisciplinaEBanca(req, res) {
    const disciplina = req.params.disciplina;
    const banca = req.params.banca;
    try{
        const questao = questaoService.buscarQuestaoPorDisciplinaEBanca(disciplina, banca);
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

function removerQuestaoPorId(req, res) {
    const id = +req.params.id;
    try{
        questaoService.removerQuestaoPorId(id);
        res.json({msg:'Questão deletada com sucesso!'});
    } catch(err){
        res.status(err.id).json({msg:err.message});
    }
}


module.exports = {
    listarQuestoes,
    cadastrarQuestao,
    buscarQuestaoPorId,
    buscarQuestaoPorDisciplina,
    buscarQuestaoPorBanca,
    buscarQuestaoPorBancaEAno,
    buscarQuestaoPorDisciplinaEBanca,
    atualizarQuestao,
    removerQuestaoPorId
}