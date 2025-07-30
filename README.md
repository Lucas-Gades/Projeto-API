📝✨ API de Questões de Concursos Públicos com Node.js, PostgreSQL, JWT e OAuth2

Durante a cadeira de Desenvolvimento de APIs na faculdade, sob orientação do professor Luis Henrique Ries, desenvolvi como projeto final uma API completa para gerenciamento de questões de concursos públicos.

O objetivo foi criar uma solução robusta, escalável e segura, contemplando desde a administração das questões até a geração de provas personalizadas, com autenticação e autorização modernas para garantir o acesso controlado.

---

## 🚀 Funcionalidades

- **CRUD Completo de Questões**
  - Inserir, editar, buscar e deletar questões no banco de dados PostgreSQL via endpoints RESTful.
- **Geração de Provas Aleatórias**
  - Gerar provas com 10 questões aleatórias.
  - Gerar provas com quantidade personalizada de questões.
  - Gerar provas filtrando por banca específica (ex: CESPE, FCC, VUNESP) e quantidade desejada.
  - Gerar provas escolhendo uma disciplina específica e quantidade de questões.
  - Buscar provas geradas via endpoint.
- **Autenticação & Autorização**
  - Login de usuários para acesso à API.
  - Geração e validação de tokens JWT/OAuth2.
  - Middleware para proteção dos endpoints (apenas usuários autenticados podem acessar, via header `X-Auth-Token`).
- **Segurança**
  - Utilização de JWT para autenticação e autorização.
  - Middleware para validação de token e proteção das rotas sensíveis.
  - Princípios de segurança para APIs RESTful implementados.
- **Arquitetura**
  - Camadas bem definidas: Controller, Router, Service, Repository e Middleware.
  - Conexão eficiente com banco de dados PostgreSQL.
  - Código desenvolvido em JavaScript (Node.js).

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Backend em JavaScript.
- **Express.js**: Framework para construção das rotas e controllers.
- **PostgreSQL**: Banco de dados relacional para armazenamento das questões/provas.
- **JWT & OAuth2**: Autenticação e autorização seguras.
- **Arquitetura MVC**: Separação clara de responsabilidades (Controllers, Services, Repositories, Middlewares).
- **Segurança**: Proteção dos endpoints e dados sensíveis.

---

## 📚 Aprendizados

- Estruturação de projetos Node.js com boas práticas de organização de código (MVC).
- Implementação de CRUD completo para recursos RESTful.
- Integração e manipulação de dados com PostgreSQL.
- Criação de middlewares para validação de tokens e proteção das rotas.
- Geração dinâmica de provas com filtros personalizados.
- Implementação de autenticação segura com JWT e OAuth2.
- Boas práticas de segurança para APIs RESTful.
- Testes e tratamento de exceções nos serviços.

---

## 👨‍🏫 Projeto Final da Cadeira de Desenvolvimento de APIs  
Desenvolvido na faculdade sob orientação do professor **Luis Henrique Ries**.

Esse projeto foi essencial para consolidar meus conhecimentos em backend, banco de dados, autenticação, segurança e boas práticas de desenvolvimento de APIs modernas.

---
#NodeJS #Express #PostgreSQL #JWT #OAuth2 #API #RESTful #CRUD #Seguranca #Autenticacao #Autorizacao #Faculdade #DesenvolvimentoDeAPIs #ProjetoFinal #LuisHenriqueRies #Backend #JavaScript
