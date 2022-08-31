/**Criar registo */
function registar(){
    $.ajax({
        url: '/api/auth/registar',
        method: 'post',
        data: {
            Nome:document.getElementById("nome").value,
            Email:document.getElementById("emailRegistar").value,
            Senha:document.getElementById("senhaRegist").value,
        },
        success: function(result, status){
            console.log('Success')
            window.location = "index.html";
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log(errorThrown);
        }
    })
}