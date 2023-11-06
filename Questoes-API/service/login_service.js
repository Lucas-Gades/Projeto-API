const jwt = require('jsonwebtoken');
const usersRepository = require('../repository/users_repository');

const jwtSecret = 'YourSecretKey'; // Replace with your secret key

function validarLogin(login) {
    const usuario = usersRepository.buscarUsuarioPorUsername(login.usuario);

    if (usuario && login.senha === usuario.senha) {
        const token = jwt.sign(
            { usuario: usuario.id },
            jwtSecret,
            { expiresIn: '1h' }
        );
        return token;
    } else {
        throw { id: 401, message: 'Username ou senha inválidos' };
    }
}

function validarToken(token) {
    try {
        const payload = jwt.verify(token, jwtSecret);
        return payload;
    } catch (error) {
        throw { id: 401, message: 'Você não tem acesso ao recurso' };
    }
}

module.exports = { validarLogin, validarToken };