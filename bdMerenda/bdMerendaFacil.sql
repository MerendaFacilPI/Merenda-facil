-- Cria um novo banco de dados chamado merendaFacil
CREATE DATABASE merendaFacil;

-- Seleciona o banco de dados merendaFacil para uso
USE merendaFacil;

-- Cria uma nova tabela chamada T_login com três colunas: idlogin, email e senha
-- A coluna idlogin é definida como uma chave primária e autoincrementável
CREATE TABLE T_login (
    idlogin INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50),
    senha VARCHAR(50)
);

-- Insere dados na tabela T_login
-- Insere dois conjuntos de valores: (email, senha)
-- Um para 'adminmerendaescolar@gmail.com' com a senha 'adminescolar'
-- Outro para 'inspetormerendaescolar@gmail.com' com a senha 'inspetorescolar'
INSERT INTO T_login (email, senha) 
VALUES ('adminmerendaescolar@gmail.com', 'adminescolar'), 
       ('inspetormerendaescolar@gmail.com', 'inspetorescolar');

-- Seleciona todos os dados da tabela T_login
SELECT * FROM T_login;
