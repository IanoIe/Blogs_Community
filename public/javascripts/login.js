/** Função de Login */
function entrar() {
    $.ajax({
        url: '/api/login',
        method: 'post',
        data: {
            email: document.getElementById("email").value,
            senha: document.getElementById("senha").value,
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