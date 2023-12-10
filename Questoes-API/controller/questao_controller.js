const questaoService = require('../service/questao_service');

async function listarQuestoes(req , res) {
    const listarQuestoes = await questaoService.listarQuestoes();
    res.json(listarQuestoes);
}

async function cadastrarQuestao(req, res) {
    let questao = req.body;
    try{
        const questaoCadastrada = await questaoService.cadastrarQuestao(questao);
        res.status(201).json("Questão cadastrada no banco com sucesso!!");
    } catch(err){
        res.status(err.id).json({msg:err.message});
    }
}

async function buscarQuestaoPorId(req, res) {
    const id = parseInt(req.params.id);
    try{
        const questao = await questaoService.buscarQuestaoPorId(id);
        res.json(questao);
    } catch(err){
        res.status(err.id).json({msg:err.message});
    }
}
async function buscarQuestaoPorDisciplina(req, res) {
    const disciplina = req.params.disciplina;
    try{
        const questao = await questaoService.buscarQuestaoPorDisciplina(disciplina);
        res.json(questao);
    } catch(err){
        res.status(err.id).json({msg:err.message});
    }

}

async function buscarQuestaoPorBanca(req, res) {
    const banca = req.params.banca;
    try{
        const questao = await questaoService.buscarQuestaoPorBanca(banca);
        res.json(questao);
    } catch(err){
        res.status(err.id).json({msg:err.message});
    }
}

async function buscarQuestaoPorBancaEAno(req, res) {
    const banca = req.params.banca;
    const ano = parseInt(req.params.ano);
    try{
        const questao = await questaoService.buscarQuestaoPorBancaEAno(banca, ano);
        res.json(questao);
    } catch(err){
        res.status(err.id).json({msg:err.message});
    }
}

async function buscarQuestaoPorDisciplinaEBanca(req, res) {
    const disciplina = req.params.disciplina;
    const banca = req.params.banca;
    try{
        const questao = await questaoService.buscarQuestaoPorDisciplinaEBanca(disciplina, banca);
        res.json(questao);
    } catch(err){
        res.status(err.id).json({msg:err.message});
    }
}

async function atualizarQuestao(req, res) {
    const id = +req.params.id;
    let questao = req.body;
    try{
       const questaoAtualizada = await questaoService.atualizarQuestao(id, questao);
        res.json(questaoAtualizada);
    } 
    catch(err){
        res.status(err.id).json({msg:err.message});
    }
}

async function removerQuestaoPorId(req, res) {
    const id = +req.params.id;
    try{
        await questaoService.removerQuestaoPorId(id);
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