const { Avaliacao, sequelize, Sequelize } = require('../db/models');

const PerguntaService = require('../perguntas/perguntas.service');

module.exports = {
    create: (idUsuario, nota) => Avaliacao.create({ idUsuario, nota }),

    calcularNota: async body => {
        const respostasConvertidas = await PerguntaService.converterParaRespostas(body);
        const respostasPositivas = PerguntaService.filtrarRespostasPositivas(respostasConvertidas);
        const totalPerguntasSistema = respostasConvertidas.length;
        const totalPositivas = respostasPositivas.length;
        const nota = (totalPositivas / totalPerguntasSistema) * 10;
        return nota;
    },

    count: () => Avaliacao.count(),

    mediaNotas: async () => {
        const query = await Avaliacao.findOne({
            attributes: [ [ sequelize.fn('AVG', sequelize.col('nota')), 'mediaNotas' ]],
            raw: true
        });
        return query.mediaNotas || 0.0;
    },
    
    countNotasMenorQue: nota => {
        return Avaliacao.count({
            where: {
                nota: {
                    [Sequelize.Op.lt]: nota
                }
            }
        });
    },

    countNotasMaiorIgual: nota => {
        return Avaliacao.count({
            where: {
                nota: {
                    [Sequelize.Op.gte]: nota
                }
            }
        });
    },

    countNotasDez: () => Avaliacao.count({ where: { nota: 10 }})
};
