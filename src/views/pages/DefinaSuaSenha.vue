<!-- eslint-disable vue/multi-word-component-names -->

<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">


</script>
<template>
  <div class="login">
  
    <h1>Altere Sua Senha!</h1>
    
    <input type="password" class="senha" placeholder="Digite sua nova senha">
    <input type="password" class="senha" placeholder="Digite novamente a senha">
    
    <button class="button">Salvar</button>
    
  </div>
</template>

<style scoped>

.logo {
    background-color: #e9ecee;
}

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Defina uma altura mínima de 100% da altura da viewport */
}

h1 {
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
  width: 200px;
  padding: 10px;
  margin-top: 10px;
  border: solid 1px rgb(126, 126, 241);
  border-radius: 20px;
  color: rgb(94, 94, 133);
  background-color: white;
  transition: background-color 0.5s ease, color 0.5s ease, transform 0.5s ease;
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