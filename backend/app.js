// app.js

// eslint-disable-next-line no-undef
const express = require('express');
// eslint-disable-next-line no-undef
const mysql = require('mysql2');

const app = express();

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Conexão com o banco de dados MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'merendafacil'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados MySQL');
});

// Rotas
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
    connection.query(sql, [email, password], (err, results) => {
        if (err) {
            console.error('Erro ao executar a consulta SQL:', err);
            res.status(500).json({ message: "Erro interno do servidor" });
            return;
        }
        if (results.length === 0) {
            res.status(400).json({ message: "Credenciais inválidas" });
            return;
        }
        res.json({ message: "Login bem-sucedido" });
    });
});