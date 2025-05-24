const { readFile, writeFile } = require('../utils/fileHelper');
const path = require('path');
const dbPath = path.join(__dirname, '..', 'database', 'db.json');

//pegar todos os dados
const pegarRequisicoes = async () => {
    const dados = await readFile(dbPath);
    return JSON.parse(dados);
}

//filtrar todos os dados


//criar novos dados 
const criarRequisicoes = async (dadosData) => {
    const data = await readFile(dbPath);
    const dados = JSON.parse(data);

    const newDado= {
        id: Date.now(), //id unico
        ...dadosData
    }

    dados.push(newDado);
    await writeFile(dbPath, JSON.stringify(dados, null, 2));

    return newDado;
}

module.exports = {
    criarRequisicoes, pegarRequisicoes, 
}

