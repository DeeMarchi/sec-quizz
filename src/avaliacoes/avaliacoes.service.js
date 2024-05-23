const { Avaliacao } = require('../db/models');

module.exports = {
    create: (idUsuario, nota) => Avaliacao.create({ idUsuario, nota }),
};
