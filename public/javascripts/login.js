/** Função de Login */
function entrar() {
    $.ajax({
        url: '/api/auth/login',
        method: 'post',
        data: {
            Email: document.getElementById("email").value,
            Senha: document.getElementById("password").value,
        },
        success: function(result, status) {
            console.log(result)
            alert('Login com sucesso!')
            localStorage.setItem("Nome", result[0].Nome);
            localStorage.setItem("idUtilizador", result[0].idUtilizador);
            window.location = "Principal.html";
        },
        erro: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThron);
        },
    })
}

/**Criar registo */
function registar(){
    $.ajax({
        url: '/api/auth/register',
        method: 'post',
        data: {
            Nome:document.getElementById("nome").value,
            Email:document.getElementById("emailRegistar").value,
            Senha:document.getElementById("senhaRegist").value,
        },
        success: function(result, status){
            console.log('Success')
            alert('Registo com sucesso!')
            window.location = "index.html";
        },
        erro: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThron);
        },
    })
}