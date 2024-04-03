<!-- eslint-disable vue/multi-word-component-names -->

<script>
import CustomMenu from './Menu.vue';

export default {
  name: 'CadastroDeAluno',
  components: {
    CustomMenu
  }
}
</script>
<template>
    <CustomMenu />
    
    <div class="container1">
        <h1 style="height:100%; text-align: center;">Cadastrar alunos (a)</h1>
    </div>
    <div class="container2">
        <input type="hidden" name="MAX_FILE_SIZE" value="4194304" />
        <input type="file" />
        <button class="button">Salvar Arquivo</button>
    </div>

    <div class="container3" style="">
        <h2 style="height:260px">Registro de alunos(a):</h2>
    </div>
</template>

<style scoped>

.container1{
    width:100%; 
    float:left; 
    margin-bottom:10px;
}
.container2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px; /* Adicionando margem inferior para separar do próximo elemento */
    padding: 138px; /* Adicionando padding para espaçamento interno */
}
.container3 {
    background-color:blue;
     width:100%; 
     float:right;
}

input[type="hidden"],
input[type="file"] {
    width: 300px;
    padding: 10px;
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
</style>



