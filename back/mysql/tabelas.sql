-- criar a base
create database if not exists mytasks;
-- ou
create database mytasks;

-- informar ao MySQL qual base sobre a qual use schemas usar;
use mytasks;

-- criar tabela para usuario
create table if not exists tb_usuario(
	id int primary key,
    nome varchar(200) not null,
    email varchar(50) not null,
    senha varchar(50) not null
);

-- criar tabela de perguntas
create table if not exists tb_perguntas(
	id_pergunta int primary key,
    nome_pergunta varchar(50),
    pergunta varchar(200)
);

-- criar tabela de respostas
create table if not exists tb_respostas(
	id_respota int primary key,
    resposta varchar(200)
);

-- visualizar alguma tabela:
select * from tb_usuario;