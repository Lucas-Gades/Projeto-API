const questaoRepository = require('../repository/questao_repository')

const {Client} = require('pg');

const conexao = {
    host: "localhost",
    port: 5432,
    database: "api_questoes",
    user: "postgres",
    password: "21312804"
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
  const resultProva = await client.query(
      "INSERT INTO prova (nome) VALUES ($1) RETURNING *",
      [`Prova_${Date.now()}`]
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
    const resultProva = await client.query(
        "INSERT INTO prova (nome) VALUES ($1) RETURNING *",
        [`Prova_${Date.now()}`]
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
    const resultProva = await client.query(
        "INSERT INTO prova (nome) VALUES ($1) RETURNING *",
        [`Prova_${Date.now()}`]
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
    const resultProva = await client.query(
        "INSERT INTO prova (nome) VALUES ($1) RETURNING *",
        [`Prova_${Date.now()}`]
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