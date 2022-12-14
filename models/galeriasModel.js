var mysql = require('./connection').pool;

module.exports.galerias = function(obj, callback, next){
    mysql.getConnection(function (err, conn){
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("select descricao, dataCriacaoGaleria, capa from galeria", obj, function(err, rows){
            conn.release();
            if (!(rows.length === 0)) {
                callback({code: 200, status: "Ok"}, rows);
            }
            else {
                callback({code: 401, sattus: "Erro ao imprimir Post"}, null);
            }
        })
    })
}