function galerias() {
    url = '/api/galerias/'
    idUtilizador = localStorage.getItem("idUtilizador")
    $.ajax({
        url: url+idUtilizador,
        method: 'get',
        success: function(resultado){
            galeriasInfor = resultado;
            var galeria = "<div class='container'>";
            console.log(galeriasInfor)
            for (let index = 0; index < galeriasInfor.length; index++){
                const element = galeriasInfor[index];
                console.log(element)
                galeria += "<div class='galeria'><img src='"+element.capa+"' class='iconDetails'/>" +
                "<h3 class='title'>Titulo: "+element.descricao+"<h4 class='subtitle'>Data de criação: "
                +element.dataCriacaoGaleria.split("T").splice(0,1)+"</img></h3></h4></div>";
            }
            "</div>";
            console.log(galeria)
            document.getElementById("galerias").innerHTML = galeria;          
        }
    })
}

window.onload = ()=>{console.log("Estou aqui...");galerias()}