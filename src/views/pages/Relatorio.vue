<!-- eslint-disable vue/multi-word-component-names -->
<script>
import CustomMenu from './Menu.vue';

export default {
  name: 'Relatorio',
  components: {
    CustomMenu
  }
}
</script>
<template>
    <CustomMenu />

    <div class="containerR">
      <h1>Relatorio</h1>
        <!-- Conteúdo do relatório aqui -->
    </div>
</template>

<style scoped>
.containerR {
    margin-top: 150px; /* Adicionando margem superior para afastar do topo */
    padding-left: 30px; /* Adicionando preenchimento para afastar do lado esquerdo */
    width:100%; 
    float:right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px; /* Adicionando margem inferior para separar do próximo elemento */
}
</style>

