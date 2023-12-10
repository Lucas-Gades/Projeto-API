const questaoRepository = require('../repository/questao_repository')

async function listarQuestoes() {
    return await questaoRepository.listarQuestoes();
}

async function cadastrarQuestao(questao) {
    if(questao && questao.descricao && questao.disciplina_nome && questao.banca_nome && questao.ano && questao.alternativa_a  && questao.alternativa_b  && questao.alternativa_c  && questao.alternativa_d  && questao.alternativa_e  && questao.correta ){
       return await questaoRepository.cadastrarQuestao(questao);
    }else{
        throw { id: 400, message: "Questão não possui descrição, alternativas ou resposta" };
    }
}

async function buscarQuestaoPorId(id) {
    const questao = await questaoRepository.buscarQuestaoPorId(id);
    if(questao) {
        return questao;
    }
    else {
        throw {id:404, message:"Questão nao encontrado"};
    }
}

async function buscarQuestaoPorDisciplina(disciplina) {
    const questao = await questaoRepository.buscarQuestaoPorDisciplina(disciplina);
    if(questao) {
        return questao;
    }
    else {
        throw {id:404, message:"Questão nao encontrado"};
    }
}

async function buscarQuestaoPorBanca(banca) {
    const questao = await questaoRepository.buscarQuestaoPorBanca(banca);
    if(questao) {
        return questao;
    }
    else {
        throw {id:404, message:"Questão nao encontrado"};
    }
}

async function buscarQuestaoPorBancaEAno(banca, ano) {
    const questao = await questaoRepository.buscarQuestaoPorBancaEAno(banca, ano);
    if(questao) {
        return questao;
    }
    else {
        throw {id:404, message:"Questão nao encontrado"};
    }
}

async function buscarQuestaoPorDisciplinaEBanca(disciplina, banca) {
    const questao = await questaoRepository.buscarQuestaoPorDisciplinaEBanca(disciplina, banca);
    if(questao) {
        return questao;
    }
    else {
        throw {id:404, message:"Questão nao encontrado"};
    }
}

async function atualizarQuestao(id, questaoAtualizada) {
    const questao = await questaoRepository.buscarQuestaoPorId(id);
    if (!questao) {
      throw { id: 404, message: "Questão não encontrada" };
    }
    if(
        questaoAtualizada &&
        questaoAtualizada.descricao &&
        questaoAtualizada.banca_nome &&
        questaoAtualizada.disciplina_nome&&
        questaoAtualizada.ano &&
        questaoAtualizada.alternativa_a &&
        questaoAtualizada.alternativa_b &&
        questaoAtualizada.alternativa_c &&
        questaoAtualizada.alternativa_d &&
        questaoAtualizada.alternativa_e &&
        questaoAtualizada.correta
    ){
        return await questaoRepository.atualizarQuestao(id, questaoAtualizada);
    } 
    else {
      throw { id: 400, message: "Questão não possui descrição, alternativas ou resposta" };
    }
  }
  
async function removerQuestaoPorId(id) {
    const questao =  await questaoRepository.buscarQuestaoPorId(id);
    if(!questao){
        throw {id: 404, message: "Questão nao encontrado"};
    }
    questaoRepository.removerQuestaoPorId(id);
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