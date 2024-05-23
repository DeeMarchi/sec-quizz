const { Pergunta } = require('../db/models');

module.exports = {
    findAll() {
        return Pergunta.findAll({
            attributes: [ 'id', 'texto' ]
        });
    }
};
