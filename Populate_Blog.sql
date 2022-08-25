-- Informação
use blog;


insert into Utilizador (idUtilizador, nome, email, senha) values (1, 'diego','diego@hotmail.com','diego');
insert into Utilizador (idUtilizador, nome, email, senha) values (2, 'luis','luis@gmail.com','luis');

insert into Post (idPost, Titulo, Texto, imagem, dataCriacao, Utilizador_idUtilizador) values (1, 'Incêndio Perigoso', 'Este incêndio atingoiu mais que 50% de habitação', 'https://ibb.co/QCbZ9Nr', '2022-08-25', 1);
insert into Post (idPost, Titulo, Texto, imagem, dataCriacao, Utilizador_idUtilizador) values (2, 'Melhor Praia','Esta praia é uma das melhores praias','https://ibb.co/y6ZBs5K', '2022-08-24', 2);

insert into Comentarios (idComentarios, comentarios, dataComentario, Post_idPost, Utilizador_idUtilizador) values(1, 'Não sei se esta é a melhor praia, mas vale a pena', '2022-08-23', 1, 2);
insert into Comentarios (idComentarios, comentarios, dataComentario, Post_idPost, Utilizador_idUtilizador) values(2, 'Gostei muita desta praia e ainda ontem tive lá', '2022-08-22', 2, 1);

