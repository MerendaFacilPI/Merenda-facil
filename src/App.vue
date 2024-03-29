
<template>
  <div class="container">
    <RouterView />
    <nav class="container-rota">
      <RouterLink to="/">Login</RouterLink>
      <RouterLink to="/Usuario">Tela do Usuário</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
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
  padding: 10px;
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
