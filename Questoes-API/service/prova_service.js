const {Client} = require('pg');
const conexao  = require('../conexao')
const questaoRepository = require('../repository/questao_repository')


async function gerarNomeDaProva(){
    const client = new Client(conexao);
    await client.connect();
    const resultMaxId = await client.query("SELECT COALESCE(MAX(id), 0) AS max_id FROM prova");
    const maxId = resultMaxId.rows[0].max_id;
    const nextProvaId = maxId + 1;
    const nomeProva = `Prova_${String(nextProvaId).padStart(2, '0')}`;
    await client.end();
    return nomeProva;
}


async function buscarProvaPorId(provaId){
    const client = new Client(conexao);
    client.connect();
    const res = await client.query(`SELECT q.* FROM questao q JOIN prova_questao pq ON q.id = pq.questao_id JOIN prova p ON pq.prova_id = p.id WHERE p.id = $1;`, [provaId]);
    const prova = res.rows;
    client.end();
    return prova;
}

async function gerarProvaAleatoriaCom10Questoes() {
  const client = new Client(conexao);
  await client.connect();
  const nomeProva = await gerarNomeDaProva();
  const resultProva = await client.query(
      "INSERT INTO prova (nome) VALUES ($1) RETURNING *",
      [nomeProva]
  );
  const provaId = resultProva.rows[0].id;
  const listaQuestoes = await questaoRepository.listarQuestoes();
  const questoesAleatorias = [];
  while (questoesAleatorias.length < 10) {
      const questao = listaQuestoes[Math.floor(Math.random() * listaQuestoes.length)];
      const adicionada = await client.query(
          "SELECT * FROM prova_questao WHERE prova_id = $1 AND questao_id = $2",
          [provaId, questao.id]
      );
      if (adicionada.rows.length === 0) {
          questoesAleatorias.push(questao);
          await client.query(
              "INSERT INTO prova_questao (prova_id, questao_id) VALUES ($1, $2)",
              [provaId, questao.id]
          );
      }
  }
  await client.end();
  return {
      provaId: provaId,
      questoes: questoesAleatorias,
  };
}

  async function gerarProvaComNQuestoes(quantidadeDeQuestoes) {
    const client = new Client(conexao);
    await client.connect();
    const nomeProva = await gerarNomeDaProva();
    const resultProva = await client.query(
        "INSERT INTO prova (nome) VALUES ($1) RETURNING *",
        [nomeProva]
    );
    const provaId = resultProva.rows[0].id;
    const listaQuestoes = await questaoRepository.listarQuestoes();
    const questoesAleatorias = [];
    while (questoesAleatorias.length < quantidadeDeQuestoes) {
        const questao = listaQuestoes[Math.floor(Math.random() * listaQuestoes.length)];
        const adicionada = await client.query(
            "SELECT * FROM prova_questao WHERE prova_id = $1 AND questao_id = $2",
            [provaId, questao.id]
        );
        if (adicionada.rows.length === 0) {
            questoesAleatorias.push(questao);
            await client.query(
                "INSERT INTO prova_questao (prova_id, questao_id) VALUES ($1, $2)",
                [provaId, questao.id]
            );
        }
    }
    await client.end();
    return {
        provaId: provaId,
        questoes: questoesAleatorias,
    };
  }
  
  async function gerarProvaComNQuestoesDeUmaBanca(quantidadeDeQuestoes, banca) {
    const client = new Client(conexao);
    await client.connect();
    const nomeProva = await gerarNomeDaProva();
    const resultProva = await client.query(
        "INSERT INTO prova (nome) VALUES ($1) RETURNING *",
        [nomeProva]
    );
    const provaId = resultProva.rows[0].id;
    const listaQuestoes = await questaoRepository.buscarQuestaoPorBanca(banca);
    const questoesAleatorias = [];
    while (questoesAleatorias.length < quantidadeDeQuestoes) {
        const questao = listaQuestoes[Math.floor(Math.random() * listaQuestoes.length)];
        const adicionada = await client.query(
            "SELECT * FROM prova_questao WHERE prova_id = $1 AND questao_id = $2",
            [provaId, questao.id]
        );
        if (adicionada.rows.length === 0) {
            questoesAleatorias.push(questao);
            await client.query(
                "INSERT INTO prova_questao (prova_id, questao_id) VALUES ($1, $2)",
                [provaId, questao.id]
            );
        }
    }await client.end();
    return {
        provaId: provaId,
        questoes: questoesAleatorias,
    };
  }

  async function gerarProvaComNQuestoesDeUmaDisciplina(quantidadeDeQuestoes, disciplina) {
    const client = new Client(conexao);
    await client.connect();
    const nomeProva = await gerarNomeDaProva();
    const resultProva = await client.query(
        "INSERT INTO prova (nome) VALUES ($1) RETURNING *",
        [nomeProva]
    );
    const provaId = resultProva.rows[0].id;
    const listaQuestoes = await questaoRepository.buscarQuestaoPorDisciplina(disciplina);
    const questoesAleatorias = [];
    while (questoesAleatorias.length < quantidadeDeQuestoes) {
        const questao = listaQuestoes[Math.floor(Math.random() * listaQuestoes.length)];
        const adicionada = await client.query(
            "SELECT * FROM prova_questao WHERE prova_id = $1 AND questao_id = $2",
            [provaId, questao.id]
        );
        if (adicionada.rows.length === 0) {
            questoesAleatorias.push(questao);
            await client.query(
                "INSERT INTO prova_questao (prova_id, questao_id) VALUES ($1, $2)",
                [provaId, questao.id]
            );
        }
    }await client.end();
    return {
        provaId: provaId,
        questoes: questoesAleatorias,
    };
  }
  
  module.exports = {
    gerarProvaAleatoriaCom10Questoes,
    gerarProvaComNQuestoes,
    gerarProvaComNQuestoesDeUmaBanca,
    gerarProvaComNQuestoesDeUmaDisciplina,
    buscarProvaPorId

}