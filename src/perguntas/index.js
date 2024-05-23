const express = require("express");
const router = express.Router();

const PerguntaService = require('./perguntas.service');
const UsuarioService = require('../usuarios/usuarios.service');

router.get('/', async (req, res, next) => {
    const perguntas = await PerguntaService.findAll();
    res.render('view', { perguntas });
});

router.post('/', async (req, res, next) => {
    console.log(req.body);
    const { subUsuario: apelido } = req.body;
    const ids = (await PerguntaService.findAll())
        .map(pergunta => pergunta.id);
    console.log('ids perguntas atuais');
    console.log(ids);
    await UsuarioService.validatorUsuarioExiste(apelido);
    await UsuarioService.create(apelido);


    res.redirect('/');
});

module.exports = router;
