<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<!-- TelaLogin.vue -->
<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Usuário">
        <input type="password" v-model="password" placeholder="Senha">
        <button type="submit">Entrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Aqui você faria uma solicitação para o backend para autenticar o usuário
        // Suponha que você use Axios para fazer a solicitação HTTP
        axios.post('/login', {
          username: this.username,
          password: this.password
        })
        .then(response => {
          // Lidar com a resposta do backend
          console.log('Login bem-sucedido:', response.data);
        })
        .catch(error => {
          console.error('Erro ao fazer login:', error);
        });
      }
    }
  };
  </script>
  