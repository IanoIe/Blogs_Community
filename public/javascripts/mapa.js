var mapa
var map;



window.onload = function(){
    document.getElementById('Nome').innerHTML = localStorage.getItem('Nome');
}

mapa = carregarMapa('map');

/**Função carregar o map */
function carregarMapa(getElementById){
    map = L.map("map").setView([12.08561, -15.13621], 8);

    //osm layer
    var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    });
    osm.addTo(map);
}


