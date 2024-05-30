const express = require("express");
const router = express.Router();

const AvaliacaoService = require('./avaliacoes.service');

router.get('/estatisticas', async (req, res, next) => {
    const contagemAvaliacoes = await AvaliacaoService.count();
    const mediaNotas = (await AvaliacaoService.mediaNotas()).toPrecision(2);
    const notasMenor5 = await AvaliacaoService.countNotasMenorQue(5);
    const notasMaior7 = await AvaliacaoService.countNotasMaiorIgual(7);
    const notasDez = await AvaliacaoService.countNotasDez();
    res.render('estatisticas', {
        contagemAvaliacoes,
        mediaNotas,
        notasMenor5,
        notasMaior7,
        notasDez
    });
});

module.exports = router;
