-- Informação
use Blogs_Community;

insert into Utilizador (idUtilizador, nomeUtilizador, email, senha) values (1, 'diego','diego@hotmail.com','diego');
insert into Utilizador (idUtilizador, nomeUtilizador, email, senha) values (2, 'luis','luis@gmail.com','luis');

insert into Post (idPost, titulo, texto, dataCriacaoPost, Utilizador_idUtilizador) values (1, 'Incêndio Perigoso', 'Este incêndio atingiu mais que 50% de habitação', '2022-08-25', 1);
insert into Post (idPost, titulo, texto, dataCriacaoPost, Utilizador_idUtilizador) values (2, 'Melhor Praia','Esta praia é uma das melhores praias', '2022-08-24', 2);

insert into Comentarios (idComentarios, comentario, dataComentario, Post_idPost, Utilizador_idUtilizador) values(1, 'Não sei se esta é a melhor praia, mas vale a pena', '2022-08-23', 1, 2);
insert into Comentarios (idComentarios, comentario, dataComentario, Post_idPost, Utilizador_idUtilizador) values(2, 'Gostei muita desta praia e ainda ontem tive lá', '2022-08-22', 2, 1);

insert into Imagem(idImagem, nomeImagem, urlImagem, dataCriacaoImagem, Post_idPost) values(1, "Zona Azul", "https://i.ibb.co/TbvZc8m/incendio.png", "2022-10-02", 1);
insert into Imagem(idImagem, nomeImagem, urlImagem, dataCriacaoImagem, Post_idPost) values(2, "Praia", "https://i.ibb.co/rxzfyMq/praia.png",  "2022-11-01", 2);

insert into Galeria(idGaleria, descricao, dataCriacaoGaleria, Capa) values (1, "Esta galaria só tem imagens belas", "2022-11-01", "https://www.cut.org.br/images/cache/systemuploadsnews04e51e507bdbff04e6f-700x460xfit-cd5da.jpeg");
insert into Galeria(idGaleria, descricao, dataCriacaoGaleria, Capa) values (2, "Esta galeria tem grandes imagens", "2022-11-01", "https://nutricaoesaudeanimal.com.br/wp-content/uploads/2021/12/GettyImages-638564582-780x450.jpg");

insert into Utilizador_Galeria(Utilizador_idUtilizador, Galeria_idGaleria) values (1, 1);
insert into Utilizador_Galeria(Utilizador_idUtilizador, Galeria_idGaleria) values (2, 2);

insert into Galeria_Imagem(Galeria_idGaleria, Imagem_idImagem) values (1, 1);
insert into Galeria_Imagem(Galeria_idGaleria, Imagem_idImagem) values (2, 2);





