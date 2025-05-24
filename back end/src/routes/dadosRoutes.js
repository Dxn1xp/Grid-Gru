const express = require('express');
const router = express.Router();
const dadosController = require('../controllers/dadosController');


router.get('/', dadosController.pegarRequisicoes);
router.post('/', dadosController.criarRequisicoes);

module.exports = router;