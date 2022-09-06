var mysql = require('./connection').pool;

module.exports.blogs = function(obj, callback, next){
    mysql.getConnection(function (err, conn){
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("Select idPost, titulo, Texto, imagem, dataCriacao, Utilizador_idUtilizador from Post where idPost=?", [obj.Email, obj.Senha], function(err, rows){
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