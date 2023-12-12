const loginService = require('../service/login_service');

async function verificarAcesso(req, res, next) {
  const token = req.header('X-Auth-Token');
  try {
    loginService.validarToken(token);
    next();
  } catch (err) {
    res.status(err.id).json({ msg: err.message });
  }
}

async function verificarAcessoAdm(req,res, next){

}

module.exports = { verificarAcesso };
