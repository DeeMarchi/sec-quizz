const { Pergunta } = require('../db/models');

const converterStringParaBool = string => string === 'true';

const findAll = () => {
    return Pergunta.findAll({
        attributes: [ 'id', 'texto' ]
    });
};

const converterParaRespostas = async body => {
    return (await findAll())
        .map(pergunta => pergunta.id)
        .map(id => {
            return {
                id,
                respostaPergunta: converterStringParaBool(body['pergunta' + id])
            }
        });
};

const filtrarRespostasPositivas = perguntasConvertidas => {
    return perguntasConvertidas.filter(pergunta => pergunta.respostaPergunta);
};

const filtrarRespostasNegativas = perguntasConvertidas => {
    return perguntasConvertidas.filter(pergunta => !pergunta.respostaPergunta);
};

module.exports = {
    findAll,
    converterParaRespostas,
    filtrarRespostasPositivas,
    filtrarRespostasNegativas
};
