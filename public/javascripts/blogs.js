function blogs() {
    url = '/api/blogs/'
    idUtilizador = localStorage.getItem("idUtilizador")
    $.ajax({
        url: url+idUtilizador,
        method: 'get',
        success: function(resultado){
            blogsInfor = resultado
            var blog = "<div class='container2'>"
            for (let index = 0; index < blogsInfor.length; index++){
                const element = blogsInfor[index];
                console.log(element)
                blog += "<div class='post'><img src='"+element.imagem+"' class='iconDetails'/>"
                +"<h3 class='title'>Titulo: "+
                element.titulo+"<h4 class='subtitle'>Texto: "+
                "Texto: "+element.texto+"<h4 class='subtitle'>Data de criação: "+element.dataCriacao.split("T").splice(0,1)+"</h4></div>";
            }
            "</div>"
            console.log(blog)
            document.getElementById("blogs").innerHTML = blog            
        }
    })
}

window.onload = ()=>{console.log("Estou aqui...");blogs()}