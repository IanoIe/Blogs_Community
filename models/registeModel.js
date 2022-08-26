var mysql = require('./connection').pool;

module.exports.register = function(obj, callback, next){
    mysql.getConnection(function(err, conn){
        if(err) {
            conn.release();
            next(err);
        }
        else conn.query('INSERT INTO Utilizador(nome, email, senha) values(?,?,?)' [obj.nome, obj.email, obj.senha], function(err, rows){
            conn.release();
            if(!(rows.length === 0)){
                callback({code: 200, status: "Ok"}, rows)
            }
            else {
                callback({code: 401, status: "Faltam dados a preencher"}, null);
            }
        })
    })
}