function blogs() {
    url = '/api/galerias/';
    idUtilizador = localStorage.getItem("idUtilizador");
    $.ajax({
        url: url+idUtilizador,
        method: 'get',
        success: function(resultado){
            galeriasInfor = resultado;
            var galeria = "<div class='container2'>";
            console.log(galeriasInfor)
            for (let index = 0; index < galeriasInfor.length; index++){
                const element = galeriasInfor[index];
                console.log(element)
                galeria += "<div class='galeria'><img src='"+element.descricao+"' class='iconDetails'/>"
                +"<h4 class='subtitle'>Data de criação: "+element.dataCriacaoGaleria.split("T").splice(0,1)+"</h4></div>";
            }
            console.log(galeria)
            document.getElementById("galerias").innerHTML = galeria;          
        }
    })
}

window.onload = ()=>{console.log("Estou aqui...");galerias()}