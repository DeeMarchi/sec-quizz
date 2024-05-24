const express = require("express");
const router = express.Router();

const PerguntaService = require('./perguntas.service');
const UsuarioService = require('../usuarios/usuarios.service');
const AvaliacaoService = require('../avaliacoes/avaliacoes.service');

router.get('/', async (req, res, next) => {
    const perguntas = await PerguntaService.findAll();
    res.render('index', { perguntas });
});

router.post('/', async (req, res, next) => {
    const { body } = req;
    const { subUsuario: apelido } = body;
    await UsuarioService.validatorUsuarioExiste(apelido);
    const usuario = await UsuarioService.create(apelido);
    const nota = await AvaliacaoService.calcularNota(body);
    await AvaliacaoService.create(usuario.id, nota);
    res.redirect('/');
});

module.exports = router;
