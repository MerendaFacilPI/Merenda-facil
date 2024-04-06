<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="contener2" >
    <CustomMenu />
    <h2>Coletor de Dados</h2>
    <form @submit.prevent="addData">
      <label for="age">RA:</label>
      <input type="number" v-model.number="age">
      <label for="name">Nome:</label>
      <input type="text" v-model="name">
      <button type="submit">Adicionar</button>
    </form>
    <table id="data-grid">
      <thead>
        <tr>
          <th>RA</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in dataList" :key="index">
          <td>{{ data.age }}</td>
          <td>{{ data.name }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="saveDataList">Salvar Lista</button> 
  </div>
</template>

<script>
import CustomMenu from './Menu.vue';

export default {
  name: 'DefinaSuaSenha',
  components: {
    CustomMenu
  },
  data() {
    return {
      name: '',
      age: '',
      dataList: []
    };
  },
  methods: {
    addData() {
      if (this.name.trim() !== '' && this.age !== '') {
        this.dataList.push({
           age: this.age,
          name: this.name
        });

        // Limpar os campos do formulário após adicionar os dados
        this.age = '';
        this.name = '';

      } else {
        alert("Por favor, preencha todos os campos.");
      }
    },
    saveDataList() {
      // Aqui você pode implementar a lógica para salvar a lista de dados
      console.log("Lista de dados salva:", this.dataList);// Após implantar o banco de dados e ao clicar em salvar mostrarar essa msm
    }
  }
}
</script>

<style scoped>

</style>