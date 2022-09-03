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