var mysql = require('./connection').pool;

module.exports.login = function(obj, callback, next){
    mysql.getConnection(function (err, conn){
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("Select idUtilizador, nome, email, senha from Utilizador where email=? and senha=?", [obj.email, obj.senha], function(err, rows){
            conn.release();
            if (!(rows.length === 0)) {
                callback({code: 200, status: "Ok"}, rows);
            }
            else {
                callback({code: 401, sattus: "Email ou Senha incorrecta"}, null);
            }
        } )
    })
}