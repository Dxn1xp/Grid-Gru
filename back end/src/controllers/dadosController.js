const dadosService = require('../services/dadosService');

const pegarRequisicoes = async (req, res) => {
    const dados = await dadosService.pegarRequisicoes();
    res.json(dados);
};


const criarRequisicoes = async (req, res) => {
    const dadosData = req.body;
    const newDado = await dadosService.criarRequisicoes(dadosData);
    res.status(201).json(newDado);
}


module.exports = {
    pegarRequisicoes, criarRequisicoes,
}