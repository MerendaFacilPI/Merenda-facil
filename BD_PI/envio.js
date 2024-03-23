const envio = (envio) => {
    envio.preventDefault();

    const nome =  document.querySelector('input[name=nome]').value;
    const cargo = document.querySelector('input[name=cargo]').value;
    const email = document.querySelector('input[name=email]').value;
    const senha = document.querySelector('input[name=senha]').value;

    fetch ('https://api.sheetmonkey.io/form/A6PYW2w6xKtu1zFjqbhej',{

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
       body: JSON.stringify ({nome, cargo, email, senha}),
       
    });
    alert ("Dados enviados");
}

document.querySelector ('form').addEventListener ('submit', envio);
