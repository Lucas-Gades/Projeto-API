const {Client} = require('pg');
const conexao  = require('../conexao')


async function listarQuestoes() {
  const client = new Client(conexao);
  await client.connect();
  const result = await client.query("SELECT * FROM questao");
  const listaQuestoes = result.rows;
  await client.end();
  return listaQuestoes;
}


async function cadastrarQuestao(questao) {
  const client = new Client(conexao);
  await client.connect();
  const result = await client.query (
      "INSERT INTO questao (descricao, disciplina_nome, banca_nome, ano, alternativa_a, alternativa_b, alternativa_c, alternativa_d, alternativa_e, correta )" + 
      "VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
          questao.descricao,
          questao.disciplina_nome,
          questao.banca_nome,
          questao.ano,
          questao.alternativa_a,
          questao.alternativa_b,
          questao.alternativa_c,
          questao.alternativa_d,
          questao.alternativa_e,
          questao.correta
      ]);
    const questaoCadastrada = result.rows[0];
    await client.end();
    return questaoCadastrada;
}


async function buscarQuestaoPorId(id) {
  const client = new Client(conexao);
  client.connect();
  const res = await client.query(`SELECT * FROM questao WHERE id=$1`, [id]);
  const questao = res.rows[0];
  client.end();
  return questao;
}


async function buscarQuestaoPorDisciplina(disciplina) {
  const client = new Client(conexao);
  client.connect();
  const res = await client.query(`SELECT * FROM questao WHERE disciplina_nome=$1`, [disciplina]);
  const questao = res.rows;
  client.end();
  return questao;
}


async function buscarQuestaoPorBanca(banca) {
  const client = new Client(conexao);
  client.connect();
  const res = await client.query(`SELECT * FROM questao WHERE banca_nome=$1`, [banca]);
  const questao = res.rows;
  client.end();
  return questao;
}



async function buscarQuestaoPorBancaEAno(banca, ano) {
  const client = new Client(conexao);
  client.connect();
  const res = await client.query(`SELECT * FROM questao WHERE banca_nome = $1 AND ano = $2`, [banca, ano]);
  const questao = res.rows;
  client.end();
  return questao;
}

async function buscarQuestaoPorDisciplinaEBanca(disciplina, banca) {
  const client = new Client(conexao);
  client.connect();
  const res = await client.query(`SELECT * FROM questao WHERE disciplina_nome = $1 AND banca_nome = $2`, [disciplina, banca]);
  const questao = res.rows;
  client.end();
  return questao;
}

async function atualizarQuestao(id, questao) {
  const sql ='UPDATE questao SET descricao = $1, disciplina_nome = $2, banca_nome = $3, ano = $4, alternativa_a = $5, alternativa_b = $6, alternativa_c = $7, alternativa_d = $8, alternativa_e = $9, correta = $10 WHERE id = $11 RETURNING *'
  const values = [questao.descricao,questao.disciplina_nome,questao.banca_nome,questao.ano,questao.alternativa_a,questao.alternativa_b,questao.alternativa_c,questao.alternativa_d,questao.alternativa_e,questao.correta,id];
  const client = new Client(conexao);
  await client.connect();
  const result = await client.query(sql, values);
  const questaoAtualizada = result.rows[0];
  await client.end();
  return questaoAtualizada;
}

async function removerQuestaoPorId(id) {
  const client = new Client(conexao);
  await client.connect();
  const result = await client.query('DELETE FROM questao WHERE id = $1', [id]);
  const questaoRemovida = result.rows[0];
  await client.end();
  return questaoRemovida;

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
};