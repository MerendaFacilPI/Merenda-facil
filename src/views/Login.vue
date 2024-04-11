<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

</script>
<template>
  <div class="login">
    <img alt="Vue logo" class="logo" src="@/assets/Logofood.svg" width="122" height="122"/>
    <h1>Merenda Fácil</h1>
    <h2>Faça seu Login</h2>
    <br>
    <select type="text" class="caixa1"><!--Foi colocado type="text" passando que o tipo será texto-->
      <option>Qual seu Email?</option>
      <option>administrador@gmail.com</option>
      <option>secretaria@gmail.com</option>
    </select>
    
    <input type="password" class="senha" placeholder="Digite sua senha"><!--input é um elemento HTML usado para criar campos de entrada. type="password": O atributo 'type' especifica o tipo de entrada que será aceito pelo campo.-->
    
    <button class="button">Entrar</button>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Defina uma altura mínima de 100% da altura da viewport */
}

h1 {
  color: rgb(48, 164, 231);
  font-weight: 500;
  font-size: 2.6rem;
  text-align: center;
}

.caixa1 {
  width: 300px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 3ch;
}

.senha {
  width: 300px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 3ch;
}

.button {
  width: 200px;/*Define a largura do elemento */
  padding: 10px;/*Adiciona um preenchimento interno de 10 pixels ao redor do conteúdo do elemento. Isso cria espaço dentro do elemento */
  margin-top: 10px;/*Cria espaço entre este elemento e os elementos acima dele */
  border: solid 1px rgb(126, 126, 241);
  border-radius: 20px;/*Arredondamento */
  color: rgb(94, 94, 133);
  background-color: white;
  transition: background-color 0.5s ease, color 0.5s ease, transform 0.5s ease;/*Aplica uma transição suave ao elemento quando ocorrem alterações */
  cursor: pointer;
}

.button:hover {
  background-color: rgb(48, 164, 231);
  color: white;
  transform: scale(1.2);
}

p {
  font-size: 1rem;
}
</style>