const loginService = require('../service/login_service');

async function realizarLogin(req, res) {
    const login = req.body;

    try {
        const token = await loginService.validarLogin(login);
        if (token) {
            res.status(200).json({ token: token });
        } else {
            res.status(401).json({ msg: 'Login falhou' });
        }
    } catch (err) {
        res.status(err.id || 500).json({ msg: err.message || 'Erro' });
    }
}

module.exports = { realizarLogin };
