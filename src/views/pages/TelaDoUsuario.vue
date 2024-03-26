<script setup lang="ts">

</script>

<template>
    <header class="menu-topo">
        <nav class="nav-bar">
            <div class="logo">
                <h1>Merenda Fácil</h1>
            </div>

            <div class="nav-list">
                <ul>
                    <li class="nav-item"><a href="TelaDoUsuario.vue" class="nav-link">Inicio</a></li>
                    <li class="nav-item"><a href="RedefinicaoDeSenha.vue" class="nav-link">Redefina sua senha</a></li>
                    <li class="nav-item"><a href="CadastroDeAluno.vue" class="nav-link">cadastro de alunos</a></li>
                    <li class="nav-item"><a href="Relatorio.vue" class="nav-link">Relatorio</a></li>
                </ul>
            </div>

            <div class="mobile-menu-icon">
                <button onclick="menuShow()"><img class="icon" src="../src/assets/menu_white_36dp" alt=""></button>
            </div>
        </nav>

        <div class="mobile-menu">
            <ul>
              <li class="nav-item"><a href="#" class="nav-link">Inicio</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Redefina sua senha</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">cadastro de alunos</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Relatorio</a></li>
            </ul>
        
        </div>
    </header>
</template>

<style scoped>

/*Edições dos estilos da parte superior */
.menu-topo {
   
    background-color: #24252a;
    box-shadow: 0px 3px 10px #5c4a4a;
}

.nav-bar {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 6rem;
}

.logo {
    display: flex;
    align-items: center;
}

.logo h1 {
    font-size: 30px;
    color: #fff;
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
/*
.login-button button{
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
}*/

.mobile-menu-icon {
    display: none;
    max-width:60px;
    max-height: 200px;
}

.mobile-menu {
    display: none;
}

/*estilo do icone do menu ao diminuir a tela*/
@media screen and (max-width: 730px) {
    .nav-bar {
        padding: 1.5rem 4rem;
    }
    .nav-item {
        display: none;
    }

    .mobile-menu-icon {
        display: block;
    }

    .mobile-menu-icon button {
        background-color: transparent;
        border: none;
        cursor: pointer;
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

    .open{
        display: block;
    }
}
</style>

