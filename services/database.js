const mysql = require('mysql2/promise');

let db;

async function connectToDatabase() {
  try {
    db = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });
    console.log('Conexão ao MySQL estabelecida!');
  } catch (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  }
}

module.exports = { connectToDatabase, db };
