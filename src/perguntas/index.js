const express = require("express");
const router = express.Router();

const PerguntaService = require('./perguntas.service');
const UsuarioService = require('../usuarios/usuarios.service');
const AvaliacaoService = require('../avaliacoes/avaliacoes.service');

router.get('/', async (req, res, next) => {
    const perguntas = await PerguntaService.findAll();
    res.render('view', { perguntas });
});

router.post('/', async (req, res, next) => {
    const { body } = req;
    const { subUsuario: apelido } = body;
    // await UsuarioService.validatorUsuarioExiste(apelido);
    // await UsuarioService.create(apelido);

    AvaliacaoService.calcularNota(body);



    res.redirect('/');
});

module.exports = router;
