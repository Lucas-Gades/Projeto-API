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

function buscarQuestaoId(id) {
    const questao = questaoRepository.buscarQuestaoId(id);
    if(questao) {
        return questao;
    }
    else {
        throw {id:404, message:"Questão nao encontrado"};
    }
}

function buscarQuestaoDisciplina(disciplina) {
    const questao = questaoRepository.buscarQuestaoDisciplina(disciplina);
    if(questao) {
        return questao;
    }
    else {
        throw {id:404, message:"Questão nao encontrado"};
    }
}

function buscarQuestaoBanca(banca) {
    const questao = questaoRepository.buscarQuestaoBanca(banca);
    if(questao) {
        return questao;
    }
    else {
        throw {id:404, message:"Questão nao encontrado"};
    }
}

function buscarQuestaoBancaEAno(banca, ano) {
    const questao = questaoRepository.buscarQuestaoBancaEAno(banca, ano);
    if(questao) {
        return questao;
    }
    else {
        throw {id:404, message:"Questão nao encontrado"};
    }
}

function buscarQuestaoDisciplinaEBanca(disciplina, banca) {
    const questao = questaoRepository.buscarQuestaoDisciplinaEBanca(disciplina, banca);
    if(questao) {
        return questao;
    }
    else {
        throw {id:404, message:"Questão nao encontrado"};
    }
}

function atualizarQuestao(id, questaoAtualizada) {
    const questao = questaoRepository.buscarQuestaoId(id);
    if (!questao) {
      throw { id: 404, message: "Questão não encontrada" };
    }
    if (questaoAtualizada && questaoAtualizada.descricao && questaoAtualizada.alternativas && questaoAtualizada.correta) {
      questaoRepository.atualizarQuestao(id, questaoAtualizada);
    } else {
      throw { id: 400, message: "Questão não possui descrição, alternativas ou resposta" };
    }
  }
  
function removerQuestaoId(id) {
    const questao = questaoRepository.buscarQuestaoId(id);
    if(!questao){
        throw {id: 404, message: "Questão nao encontrado"};
    }
    questaoRepository.removerQuestaoId(id);
}

function  gerarProvaAleatoriaCom10Questoes() {
  let listaQuestoes = questaoRepository.listarQuestoes();
  let prova = [];
  let i = 0;
  
  while (i < 10) {
    let questao = listaQuestoes[Math.floor(Math.random() * listaQuestoes.length)];
    if (!prova.includes(questao)) {
      prova.push(questao);
      i++;
    }
  }
  return prova;
}

function gerarProvaAleatoriaComNQuestoes(quantidadeDeQuestoes) {
    let listaQuestoes = questaoRepository.listarQuestoes();
    let prova = [];
    let i = 0;
    
    while (i < quantidadeDeQuestoes) {
        let questao = listaQuestoes[Math.floor(Math.random() * listaQuestoes.length)];
        if (!prova.includes(questao)) {
        prova.push(questao);
        i++;
        }
    }
    return prova;
}

function gerarProvaAleatoriaComNQuestoesDeUmaBanca(quantidadeDeQuestoes, banca) {
    let listaQuestoes = questaoRepository.buscarQuestaoBanca(banca);
    let prova = [];
    let i = 0;
    
    while (i < quantidadeDeQuestoes) {
        let questao = listaQuestoes[Math.floor(Math.random() * listaQuestoes.length)];
        if (!prova.includes(questao)) {
        prova.push(questao);
        i++;
        }
    }
    return prova;
}

function gerarProvaAleatoriaComNQuestoesDeUmaDisciplina(quantidadeDeQuestoes, disciplina) {
    let listaQuestoes = questaoRepository.buscarQuestaoDisciplina(disciplina);
    let prova = [];
    let i = 0;
    
    while (i < quantidadeDeQuestoes) {
        let questao = listaQuestoes[Math.floor(Math.random() * listaQuestoes.length)];
        if (!prova.includes(questao)) {
        prova.push(questao);
        i++;
        }
    }
    return prova;
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