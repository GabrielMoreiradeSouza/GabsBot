// index.js
require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração de rota principal
app.get('/', (req, res) => {
  res.send('Bot de Sorteio no TikTok está ativo!');
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
