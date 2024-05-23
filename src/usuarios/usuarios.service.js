const { Usuario } = require('../db/models');

module.exports = {
    create: apelido => Usuario.create({ apelido }),
    validatorUsuarioExiste: async apelido => {
        const usuario = await Usuario.findOne({ where: { apelido }});
        if (usuario) {
            throw Error('Usuário já cadastrado');
        }
    }
};
