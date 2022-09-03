var mysql = require('./connection').pool;

module.exports.registar = function (obj, callback, next){
    mysql.getConnection(function(err, conn){
        if(err) {
            conn.release();
            next(err);
        }
        else conn.query('INSERT INTO Utilizador(nome, email, senha) VALUES(?,?,?)', [obj.Nome, obj.Email, obj.Senha], function(err, rows){
            conn.release();
            if(!(rows.length === 0)){
                callback({code: 200, status: 'Ok'},rows)
            }
            else {
                callback({code: 401, status: "Erro ao enviar dados a BD!"}, null);
            }
        })
    })
}