/**Criar registo */
function register(){
    $.ajax({
        url: '/api/register',
        method: 'post',
        data: {
            Nome:document.getElementById("nome").value,
            Email:document.getElementById("emailRegistar").value,
            Senha:document.getElementById("senha").value,
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