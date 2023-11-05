const questaoRepository = require('../repository/questao_repository')

function listarQuestoes() {
    return questaoRepository.listarQuestoes();
}

function cadastrarQuestao(questao) {
    if(questao && questao.descricao && questao.alternativas && questao.correta && questao.banca && questao.ano && questao.disciplina ){
        questaoRepository.cadastrarQuestao(questao);
    }else{
        throw { id: 400, message: "Questão não possui descrição, alternativas ou resposta" };
    }
}

function buscarQuestaoPorId(id) {
    const questao = questaoRepository.buscarQuestaoPorId(id);
    if(questao) {
        return questao;
    }
    else {
        throw {id:404, message:"Questão nao encontrado"};
    }
}

function buscarQuestaoPorDisciplina(disciplina) {
    const questao = questaoRepository.buscarQuestaoPorDisciplina(disciplina);
    if(questao) {
        return questao;
    }
    else {
        throw {id:404, message:"Questão nao encontrado"};
    }
}

function buscarQuestaoPorBanca(banca) {
    const questao = questaoRepository.buscarQuestaoPorBanca(banca);
    if(questao) {
        return questao;
    }
    else {
        throw {id:404, message:"Questão nao encontrado"};
    }
}

function buscarQuestaoPorBancaEAno(banca, ano) {
    const questao = questaoRepository.buscarQuestaoPorBancaEAno(banca, ano);
    if(questao) {
        return questao;
    }
    else {
        throw {id:404, message:"Questão nao encontrado"};
    }
}

function buscarQuestaoPorDisciplinaEBanca(disciplina, banca) {
    const questao = questaoRepository.buscarQuestaoPorDisciplinaEBanca(disciplina, banca);
    if(questao) {
        return questao;
    }
    else {
        throw {id:404, message:"Questão nao encontrado"};
    }
}

function atualizarQuestao(id, questaoAtualizada) {
    const questao = questaoRepository.buscarQuestaoPorId(id);
    if (!questao) {
      throw { id: 404, message: "Questão não encontrada" };
    }
    if (questaoAtualizada && questaoAtualizada.descricao && questaoAtualizada.alternativas && questaoAtualizada.correta) {
      questaoRepository.atualizarQuestao(id, questaoAtualizada);
    } else {
      throw { id: 400, message: "Questão não possui descrição, alternativas ou resposta" };
    }
  }
  
function removerQuestaoPorId(id) {
    const questao = questaoRepository.buscarQuestaoPorId(id);
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