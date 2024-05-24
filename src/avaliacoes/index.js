const express = require("express");
const router = express.Router();

const AvaliacaoService = require('./avaliacoes.service');

router.get('/estatisticas', async (req, res, next) => {
    const contagemAvaliacoes = await AvaliacaoService.count();
    const mediaNotas = (await AvaliacaoService.mediaNotas()).toPrecision(2);
    res.render('estatisticas', {
        contagemAvaliacoes,
        mediaNotas
    });
});

module.exports = router;
