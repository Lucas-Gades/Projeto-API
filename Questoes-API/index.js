const express = require('express');
const questaoRouter = require('./router/questao_router');
const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json('Bem-vindo à API de Questões de Prova');

});

app.use('/questoes', questaoRouter);


app.listen(port, () => {
  console.log(`Servidor Express ouvindo na porta ${port}`);
});

