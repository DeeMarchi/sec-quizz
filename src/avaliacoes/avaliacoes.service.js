const { Avaliacao } = require('../db/models');

const PerguntaService = require('../perguntas/perguntas.service');

const converterStringParaBool = string => string === 'true';

module.exports = {
    create: (idUsuario, nota) => Avaliacao.create({ idUsuario, nota }),
    calcularNota: async body => {
        const respostasConvertidas = (await PerguntaService.findAll())
            .map(pergunta => pergunta.id)
            .map(id => {
                return {
                    id,
                    respostaPergunta: converterStringParaBool(body['pergunta' + id])
                }
            });
        const respostasPositivas = respostasConvertidas.filter(resposta => resposta.respostaPergunta);
        const totalPerguntasSistema = respostasConvertidas.length;
        const totalPositivas = respostasPositivas.length;
        const nota = (totalPositivas / totalPerguntasSistema) * 10;
        return nota;
    }
};
