<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="cadastro">
    <h1>Faça seu Cadastro</h1>
    <br>
   <select type="text" class="caixa1">
    <option>Qual seu Cargo?</option>
    <option>Administrador</option>
    <option>Secretaria</option>
   </select>
   <br>
   <select type="text" class="caixa1">
    <option>Qual seu Email?</option>
    <option>Administrador@gmail.com</option>
    <option>Secretaria@gmail.com</option>
   </select>
    <br>
    <input type="password" class="senha" placeholder="Sua senha">
    <br>
    <button class="button">Registrar</button>
    <br>
    <p>Ao realizar seu cadastro volte a tela de Login.</p>

  </div>
</template>

<style scoped>

.cadastro {
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
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
