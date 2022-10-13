function blogs() {
    url = '/api/blogs/'
    idUtilizador = localStorage.getItem("idUtilizador")
    $.ajax({
        url: url,
        method: 'get',
        success: function(resultado){
            blogsInfor = resultado
            var blog = "<div class='container2'>"
            for (let index = 0; index < blogsInfor.length; index++){
                const element = blogsInfor[index];
                console.log(element)
                blog += "<div><img src='"+element.imagem+"' class='iconDetails'/></div><div style='margin-left:0px;'><h3>"+"Titulo: "+
                element.titulo+"</h3><div style='font-size:1.6.6em'><h4>"+
                "Texto: "+element.Texto+"</h4><h4>"+"Data de criação: "+element.dataCriacao.split("T").splice(0,1)+"</h4></div></br></br></div>"
            }
            console.log(blog)
            document.getElementById("blogs").innerHTML = blog            
        }
    })
}

window.onload = ()=>{blogs()}