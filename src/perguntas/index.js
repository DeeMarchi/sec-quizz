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
    let perguntas = await PerguntaService.findAll();
    const respostasUsuario = await PerguntaService.converterParaRespostas(body);
    const negativas = PerguntaService.filtrarRespostasNegativas(respostasUsuario);
    perguntas = perguntas.filter(pergunta => {
        for (const negativa of negativas) {
            if (negativa.id === pergunta.id) return true;
        }
    });
    // await UsuarioService.validatorUsuarioExiste(apelido);
    // const usuario = await UsuarioService.create(apelido);
    // const nota = await AvaliacaoService.calcularNota(body);
    // await AvaliacaoService.create(usuario.id, nota);
    res.render('post', { perguntas });
});

module.exports = router;
