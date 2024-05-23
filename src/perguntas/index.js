const express = require("express");
const router = express.Router();

const PerguntaService = require('./perguntas.service');

router.get('/', async (req, res, next) => {
    const perguntas = await PerguntaService.findAll();
    res.render('view', { perguntas });
});

router.post('/', async (req, res, next) => {
    console.log(req.body);
    const ids = (await PerguntaService.findAll())
        .map(pergunta => pergunta.id);
    console.log('ids perguntas atuais');
    console.log(ids);
    res.redirect('/');
});

module.exports = router;
