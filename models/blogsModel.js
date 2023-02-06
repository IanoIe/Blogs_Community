var mysql = require('./connection').pool;

module.exports.blogs = function(id, callback, next){
    mysql.getConnection(function (err, conn){
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("select titulo, texto, dataCriacaoPost, idUtilizador, "+
                  "idPost, nomeImagem, urlImagem, dataCriacaoImagem from Post, "+
                  "Utilizador, Imagem where idUtilizador = Utilizador_idUtilizador "+
                  "and idPost = Post_idPost and idUtilizador = ? ", id, function(err, rows){
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