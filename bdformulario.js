
mysql-init( &conexao);
if (mysql_query(&conexao,"insert into merendaFacil " root","@Poneis@202319", 

const Sequelize = require ('sequelize')
const Sequelize = new Sequelize ('merendaFacil', 'root', '@Poneis@202319' {
host:,
dialect: "Mysql"})


// informar se foi conectado com sucesso ao banco de dados caso tenha dado certo 'then' se aparecer erro "catch"

sequelize.autenticate().then(function(){
console.log("conectado com sucesso!" ) }).catch(function(erro){"falha ao se conectar: "+erro)})


const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Aluno = sequelize.define('Aluno', {
  RA: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  serie: {
    type: DataTypes.STRING(2),
  },
  nome_aluno: {
    type: DataTypes.STRING(100),
  },
  restricaoAlimentar: {
    type: DataTypes.STRING(100),
  },
  refeicao: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  dataRetirada: {
    type: DataTypes.STRING(10),
  },
  numero_de_refeicoes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  tableName: 'T_telaInicial',
  timestamps: false,
});

module.exports = Aluno;
