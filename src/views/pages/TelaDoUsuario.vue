<script setup lang="js">
  function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "..assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "..assets/img/close_white_36dp.svg";
    }
}
</script>

<template>
   <header>
        <nav class="nav-bar">
            <div class="logo">
                <img alt="Vue logo" class="logo" src="@/assets/Logofood.svg" width="110" height="75"/>
                <h1>Merenda Fácil</h1>
            </div>
            <div class="nav-list">
                <ul>
                    <li class="nav-item"><a href="RedefinicaoDeSenha.vue" class="nav-link">Altere sua senha</a></li>
                    <li class="nav-item"><a href="CadastroDeAluno.vue" class="nav-link">Cadastro de Aluno</a></li>
                    <li class="nav-item"><a href="Relatorio.vue" class="nav-link">Relatorio</a></li>
                </ul>
                <div class="login-button">
                <button><a href="#">Sair</a></button>
            </div>
            </div>
            

            <div class="mobile-menu-icon">
                <button onclick="menuShow()"><img class="icon" src="../src/assets/menu_white_36dp.svg" alt=""></button>
            </div>
        </nav>

        <div class="mobile-menu">
            <ul>
                <li class="nav-item"><a href="#" class="nav-link">Início</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Projetos</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Sobre</a></li>
            </ul>
        </div>
    </header>

    <div class="scaner">
        <button><a href="#">Scanear</a></button>
    </div>
</template>

<style scoped>
    /* Edições dos estilos da parte superior */
    .menu-topo { 
        width: 100%;
        background-color: #24252a;
        box-shadow: 0px 3px 10px #ded7d72f;
    }

    .nav-bar {
        display: flex;
        justify-content: space-between;
        padding: 1rem 2rem;
        margin: 0;
    }

    .logo {
        display: flex;
        align-items: center;
    }

    .logo h1 {
        font-size: 30px;
        color: rgb(48, 164, 231);
    }

    .nav-list {
        display: flex;
        align-items: center;
    }

    .nav-list ul {
        display: flex;
        justify-content: center;
        list-style: none;
    }

    .nav-item {
        margin: 0 15px;
    }

    .nav-link {
        text-decoration: none;
        font-size: 1.15rem;
        color: #fff;
        font-weight: 400;
    }

    .login-button button {
        border: none;
        background-color: #0187a7;
        padding: 10px 15px;
        border-radius: 5px;
    }

    .login-button button a {
        text-decoration: none;
        color: #fff;
        font-weight: 500;
        font-size: 1.1rem;
    }

    .mobile-menu-icon {
        display: none;
    }

    .mobile-menu {
        display: none;
    }

    /* Estilo do ícone do menu ao diminuir a tela */
    @media screen and (max-width: 730px) {
        .nav-bar {
            padding: 1.5rem 4rem;
        }

        .nav-list {
            display: none; /* Esconde o nav-list */
        }

        .mobile-menu-icon {
            display: block;
        }

        .mobile-menu-icon button {
            background-color: transparent;
            border: none;
            cursor: pointer;
        }

        .mobile-menu {
            display: none; /* Oculta o mobile-menu por padrão */
        }

        .mobile-menu ul {
            display: flex;
            flex-direction: column;
            text-align: center;
            padding-bottom: 1rem;
        }

        .mobile-menu .nav-item {
            display: block;
            padding: 1.5rem;
        }

        .mobile-menu .login-button {
            display: block;
            padding: 1rem 2rem;
        }

        .open {
            display: block; /* Exibe o mobile-menu quando a classe 'open' é aplicada */
        }
    }

    .scaner{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        min-height: 100vh;
    }
    .scaner button {
        border: none;
        background-color: #0187a7;
        padding: 15px 50px;
        border-radius: 5px;
    }

    .scaner button a {
        text-decoration: none;
        color: #fff;
        font-weight: 600;
        font-size: 1.1rem;
    }
</style>