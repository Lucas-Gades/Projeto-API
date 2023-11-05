const questaoRepository = require('../repository/questao_repository')

const listaProvasAleatoriasSalvas = [
    {
      "prova_id": 1,
      "questoes": [
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
        }
      ]
    },{
    "prova_id": 2,
    "questoes": [
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
            }
      
    ]
    },
    // Adicione outras provas aqui
  ];
let idGeradorProva = 2;


function buscarProvaPorId(provaId) {
    const provaEncontrada = listaProvasAleatoriasSalvas.find((prova) => prova.prova_id === provaId);

    if (provaEncontrada) {
      return provaEncontrada;
    } else {
      throw { id: 404, message: "Prova não encontrada" };
    }
  }
  function gerarProvaAleatoriaCom10Questoes() {
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
    prova.prova_id = idGeradorProva; 
    idGeradorProva++;
    listaProvasAleatoriasSalvas.push({ prova_id: prova.prova_id, questoes: prova }); 
    return prova;
}
  function gerarProvaComNQuestoes(quantidadeDeQuestoes) {
      let listaQuestoes = questaoRepository.listarQuestoes();
      let i = 0;
      let prova = [];
      if(quantidadeDeQuestoes > listaQuestoes.length){
          throw {id: 400, message: "Não há questões suficientes para gerar a prova"};
      }
      else{
          while (i < quantidadeDeQuestoes) {
              let questao = listaQuestoes[Math.floor(Math.random() * listaQuestoes.length)];
              if (!prova.includes(questao)) {
              prova.push(questao);
              i++;
              }
          }
          return prova;
      }
  }
  
  function gerarProvaComNQuestoesDeUmaBanca(quantidadeDeQuestoes, banca) {
      
          let listaQuestoes = questaoRepository.buscarQuestaoPorBanca(banca);
          let prova = [];
          let i = 0;
          
          if(quantidadeDeQuestoes > listaQuestoes.length){
              throw { id: 400, message: `Não há questões da ${banca} suficientes para gerar a prova` };
          }
          else{
              while (i < quantidadeDeQuestoes) {
                  let questao = listaQuestoes[Math.floor(Math.random() * listaQuestoes.length)];
                  if (!prova.includes(questao)) {
                  prova.push(questao);
                  i++;
                  }
              }
              return prova;
          }
      }
  
  function gerarProvaComNQuestoesDeUmaDisciplina(quantidadeDeQuestoes, disciplina) {
      let listaQuestoes = questaoRepository.buscarQuestaoPorDisciplina(disciplina);
      let prova = [];
      let i = 0;
      
      if(quantidadeDeQuestoes > listaQuestoes.length){
          throw { id: 400, message: `Não há questões da ${disciplina} suficientes para gerar a prova` };
      }
      else{
          while (i < quantidadeDeQuestoes) {
              let questao = listaQuestoes[Math.floor(Math.random() * listaQuestoes.length)];
              if (!prova.includes(questao)) {
              prova.push(questao);
              i++;
              }
          }
          return prova;
      }
  }
  
  module.exports = {
    gerarProvaAleatoriaCom10Questoes,
    gerarProvaComNQuestoes,
    gerarProvaComNQuestoesDeUmaBanca,
    gerarProvaComNQuestoesDeUmaDisciplina,
    buscarProvaPorId

}