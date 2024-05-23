const { Usuario } = require('../db/models');

const verificarUsuarioExiste = usuario => {
    if (usuario !== null) {
        throw Error('Usuário já cadastrado');
    }
};

module.exports = {
    create: apelido => Usuario.create({ apelido }),
    validatorUsuarioExiste: async apelido => {
        verificarUsuarioExiste(await Usuario.findOne({ where: { apelido }}));
    }
};
