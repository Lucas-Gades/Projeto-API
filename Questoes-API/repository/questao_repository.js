const listaQuestoes = [{
    "id": 1,
    "disciplina": "Português",
    "banca": "VUNESP",
    "ano": 2019,
    "descricao": "Qual é o plural de 'país'?",
    "alternativas": {
      "a": "países",
      "b": "pai",
      "c": "pais",
      "d": "paisa",
      "e": "paiís"
    },
    "correta": "a"
  },
  {
    "id": 2,
    "disciplina": "História",
    "banca": "CESPE",
    "ano": 2017,
    "descricao": "Quem foi o primeiro imperador do Brasil?",
    "alternativas": {
      "a": "Dom Pedro II",
      "b": "Dom João VI",
      "c": "Dom Pedro I",
      "d": "Dom Manuel I",
      "e": "Dom João III"
    },
    "correta": "c"
  },
  {
    "id": 3,
    "disciplina": "Física",
    "banca": "UFRJ",
    "ano": 2022,
    "descricao": "Qual é a unidade de medida de força no Sistema Internacional?",
    "alternativas": {
      "a": "Watt",
      "b": "Joule",
      "c": "Newton",
      "d": "Pascal",
      "e": "Ampere"
    },
    "correta": "c"
  },
  {
    "id": 4,
    "disciplina": "Inglês",
    "banca": "Cambridge English",
    "ano": 2021,
    "descricao": "Qual é o passado simples do verbo 'go'?",
    "alternativas": {
      "a": "goed",
      "b": "gone",
      "c": "went",
      "d": "going",
      "e": "goes"
    },
    "correta": "c"
  },
  {
    "id": 5,
    "disciplina": "Matemática",
    "banca": "CESPE",
    "ano": 2018,
    "descricao": "Qual é a fórmula da área de um triângulo?",
    "alternativas": {
      "a": "A = b * h",
      "b": "A = l * w",
      "c": "A = π * r^2",
      "d": "A = 2 * π * r",
      "e": "A = s^2"
    },
    "correta": "a"
  },
  {
    "id": 6,
    "disciplina": "Geografia",
    "banca": "VUNESP",
    "ano": 2020,
    "descricao": "Qual é o maior rio do mundo em extensão?",
    "alternativas": {
      "a": "Rio Nilo",
      "b": "Rio Amazonas",
      "c": "Rio Yangtzé",
      "d": "Rio Mississipi",
      "e": "Rio Danúbio"
    },
    "correta": "b"
  },
  {
    "id": 7,
    "disciplina": "Química",
    "banca": "UFRJ",
    "ano": 2023,
    "descricao": "Qual é o símbolo químico do oxigênio?",
    "alternativas": {
      "a": "Ox",
      "b": "O2",
      "c": "O",
      "d": "O3",
      "e": "Oi"
    },
    "correta": "c"
  },
  {
    "id": 8,
    "disciplina": "Arte",
    "banca": "CESPE",
    "ano": 2017,
    "descricao": "Quem pintou a Mona Lisa?",
    "alternativas": {
      "a": "Vincent van Gogh",
      "b": "Leonardo da Vinci",
      "c": "Pablo Picasso",
      "d": "Michelangelo",
      "e": "Claude Monet"
    },
    "correta": "b"
  },
  {
    "id": 9,
    "disciplina": "Biologia",
    "banca": "VUNESP",
    "ano": 2019,
    "descricao": "Qual é o órgão responsável pela produção de insulina no corpo humano?",
    "alternativas": {
      "a": "Coração",
      "b": "Rim",
      "c": "Fígado",
      "d": "Pâncreas",
      "e": "Estômago"
    },
    "correta": "d"
  },
  {
    "id": 10,
    "disciplina": "Economia",
    "banca": "CESPE",
    "ano": 2018,
    "descricao": "O que significa PIB?",
    "alternativas": {
      "a": "Produto Interno Bruto",
      "b": "Produto Industrial Bruto",
      "c": "Produto Inflacionário Bruto",
      "d": "Peso Ideal do Brasil",
      "e": "Ponto de Inflexão Bancária"
    },
    "correta": "a"
  },
  {
    "id": 11,
    "disciplina": "História",
    "banca": "UFRJ",
    "ano": 2021,
    "descricao": "Quem foi o presidente do Brasil durante a proclamação da República?",
    "alternativas": {
      "a": "Dom Pedro I",
      "b": "Getúlio Vargas",
      "c": "Marechal Deodoro da Fonseca",
      "d": "Tancredo Neves",
      "e": "Dilma Rousseff"
    },
    "correta": "c"
  },
  {
    "id": 12,
    "disciplina": "Português",
    "banca": "CESPE",
    "ano": 2017,
    "descricao": "Qual é a figura de linguagem que consiste na repetição de palavras no início de frases ou versos?",
    "alternativas": {
      "a": "Assíndeto",
      "b": "Anáfora",
      "c": "Elipse",
      "d": "Eufemismo",
      "e": "Hipérbole"
    },
    "correta": "b"
  },
  {
    "id": 13,
    "disciplina": "Física",
    "banca": "VUNESP",
    "ano": 2018,
    "descricao": "Qual é a unidade de medida de resistência elétrica?",
    "alternativas": {
      "a": "Watt",
      "b": "Joule",
      "c": "Ohm",
      "d": "Volt",
      "e": "Ampere"
    },
    "correta": "c"
  },
  {
    "id": 14,
    "disciplina": "Inglês",
    "banca": "Cambridge English",
    "ano": 2019,
    "descricao": "Como se diz 'cachorro' em inglês?",
    "alternativas": {
      "a": "Dog",
      "b": "Cat",
      "c": "Fish",
      "d": "Bird",
      "e": "Mouse"
    },
    "correta": "a"
  },
  {
    "id": 15,
    "disciplina": "Matemática",
    "banca": "UFRJ",
    "ano": 2020,
    "descricao": "Qual é o resultado da operação 5 + 7?",
    "alternativas": {
      "a": "11",
      "b": "12",
      "c": "13",
      "d": "14",
      "e": "15"
    },
    "correta": "b"
  },
]


let idGerador = 1;


function listarQuestoes() {
  return listaQuestoes;
}

function cadastrarQuestao(questao) {
  questao.id = idGerador;
  listaQuestoes.push(questao);
  idGerador++;
}

function buscarQuestaoId(id) {
  return listaQuestoes.find(function (questao) {
    return (questao.id === id);
  })
}

function buscarQuestaoDisciplina(disciplina) {
  return listaQuestoes.filter(
    (questao) => {
      return questao.disciplina.toUpperCase().includes(disciplina.toUpperCase());
    }
  )
}

function buscarQuestaoBanca(banca) {
  return listaQuestoes.filter(
    (questao) => {
      return questao.banca.toUpperCase().includes(banca.toUpperCase());
    }
  )
}


function buscarQuestaoBancaEAno(banca, ano) {
  return listaQuestoes.filter(
    (questao) => {
      return questao.banca.toUpperCase().includes(banca.toUpperCase()) && questao.ano === ano;
    }
  )
}

function buscarQuestaoDisciplinaEBanca(disciplina, banca) {
  return listaQuestoes.filter(
    (questao) => {
      return questao.disciplina.toUpperCase().includes(disciplina.toUpperCase()) && questao.banca.toUpperCase().includes(banca.toUpperCase());
    }
  )
}

function atualizarQuestao(id, questao) {
  let questaoEncontrada = buscarQuestaoId(id);
  if (questaoEncontrada != null) {
    questaoEncontrada.descricao = questao.descricao;
    questaoEncontrada.alternativas = questao.alternativas;
    questaoEncontrada.correta = questao.correta;
    questaoEncontrada.banca = questao.banca;
    questaoEncontrada.ano = questao.ano;
    questaoEncontrada.disciplina = questao.disciplina;
  }
}


function removerQuestaoId(id) {
  for (let i in listaQuestoes) {
    if (listaQuestoes[i].id === id) {
      return listaQuestoes.splice(i, 1)[0];
    }
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
  removerQuestaoId
};