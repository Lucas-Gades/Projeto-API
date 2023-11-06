const express = require('express');

const loginRouter = require('./router/login_router');
const acessoMiddleware = require('./middleware/acesso_middleware');


const usuarioRouter = require('./router/users_router');
const questaoRouter = require('./router/questao_router');
const provaRouter = require('./router/prova_router');
const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json('Bem-vindo à API de Questões de Prova');

});


app.use('/login', loginRouter);

app.use(acessoMiddleware.verificarAcesso);


app.use('/usuarios', usuarioRouter);

app.use('/questoes', questaoRouter);
app.use('/prova',provaRouter);


app.listen(port, () => {
  console.log(`Servidor Express ouvindo na porta ${port}`);
});

