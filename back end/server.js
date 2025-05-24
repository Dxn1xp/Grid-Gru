const express = require('express');
const cors = require('cors');
const dadosRoutes = require('./src/routes/dadosRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

//rotas
app.use('/api/dados', dadosRoutes);


// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


/* CONSULTA AS ROTAS EM USERROUTES POR EXEMPLO
*
* Procura po /api/users em userRoutes, mas poderia ser para 
* procurar qualquer coisa
*
*/