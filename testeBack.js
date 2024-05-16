// Importando as bibliotecas necessárias
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Criando uma instância do Express
const app = express();
const port = 3000; // Porta que o servidor irá escutar

// Configurando o body-parser para lidar com JSON e URL-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurando a conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost', // Endereço do seu servidor MySQL
  user: 'inserir seu usuario wesley',
  password: 'inserir sua senha',
  database: 'merendaFacil'
});

// Conectando ao banco de dados
connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados');
});

// Rota para pesquisar alunos por código de barras
app.get('/T_telaInicial/:RA', (req, res) => {
  const codigoDeBarras = req.params.codigoDeBarras;

  // Consulta ao banco de dados para buscar aluno pelo código de barras
  const sql = 'SELECT * FROM T_telaInicial WHERE RA = ?';
  connection.query(sql, [codigoDeBarras], (err, results) => {
    if (err) {
      console.error('Erro ao executar consulta:', err);
      res.status(500).send('Erro interno do servidor');
      return;
    }
    res.json(results); // Retorna os resultados em formato JSON
  });
});

// Rota para salvar aluno com a data fornecida
app.post('/T_telaInicial', (req, res) => {
  const aluno = req.body;
  const dataRetirada = new Date(); // Data atual

  // Inserindo aluno no banco de dados
  const sql = 'INSERT INTO T_telaInicial (RA, serie, nome_aluno, restricaoAlimentar, numero_de_refeicoes, dataRetirada)';
  connection.query(sql, [aluno.RA, aluno.serie, aluno.nome_aluno, aluno.restricaoAlimentar, aluno.numero_de_refeicoes, dataRetirada], (err, result) => {
    if (err) {
      console.error('Erro ao inserir aluno:', err);
      res.status(500).send('Erro interno do servidor');
      return;
    }
    res.send('Aluno salvo com sucesso');
  });
});

// Iniciando o servidor Express
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
