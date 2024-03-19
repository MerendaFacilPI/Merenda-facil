<script setup lang="ts">

</script>

<template>
  <div class="login">
    <h1>Faça seu Login</h1>
    <br>
   <select type="text" class="caixa1">
    <option>Qual seu Email?</option>
    <option>administrador@gmail.com</option>
    <option>secretaria@gmail.com</option>
   </select>
    <br>
    <input type="password" class="senha" placeholder="Digite sua senha">
    <br>
    <button class="button">Entrar</button>
    <p>Esqueseu sua senha?<a href="#">Clique Aqui.</a></p>

  </div>
</template>

<style scoped>

.p {
  font-size: 50px;
  margin-top: 80%;
}

.login {
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

.button{
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
.button:hover{
  background-color: rgb(48, 164, 231);
  color: white;
  transform: scale(1.2)
}

</style>
