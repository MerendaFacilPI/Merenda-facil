
<template>
  <div class="container"><!-- Define um contêiner para o conteúdo-->
    <RouterView />
    <nav class="container-rota"><!-- Barra de navegação para as rotas -->
      <RouterLink to="/">Login</RouterLink>
      <RouterLink to="/Usuario">Tela do Usuário</RouterLink><!--É necesario criar esses rotas ("/" e "/Usuario". Rotas criadas na pasta: router/index.js-->
    </nav>
  </div>
</template>

<style scoped>
.container {
  display: flex; /* Isso faz com que o elemento com a classe .container seja exibido como um contêiner flexível */
  flex-direction: column;/*Sera organizado em uma coluna, empilhados verticalmente de cima para baixo */
  min-height: 100vh; /* Define a altura mínima do contêiner como 100% da altura da viewport */
  position: relative; /* Posição relativa para que o posicionamento absoluto da barra de navegação funcione */
}

.container-rota {
  position: absolute;
  bottom: 0;
  left: 50%; /* Move a navegação para o centro horizontal */
  transform: translateX(-50%); /* Centraliza horizontalmente */
  width: 100%;
  color: white; /* Cor do texto */
  padding: 0px;
  display: flex;
  justify-content: center;
}

.container-rota a {
  padding: 0 10px; /* Espaçamento entre os links */
  text-decoration: none;
  color: white;
}

.container-rota a:hover {
  text-decoration: underline; /* Adiciona sublinhado ao passar o mouse sobre os links */
}

@media (min-width: 1024px) {
  .container-rota {
    justify-content: flex-start; /* Alinha os links à esquerda em telas maiores */
  }
}
</style>./components/NomeDoApp.vue
