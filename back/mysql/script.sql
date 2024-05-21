-- criar a base
create database if not exists mytasks;
-- ou
create database mytasks;

-- informar ao MySQL qual base sobre a qual use schemas usar;
use mytasks;

-- criar tabela de perguntas
create table if not exists tb_perguntas(
	id_pergunta int primary key,
    pergunta varchar(200)
);

-- criar tabela de respostas
create table if not exists tb_respostas(
	id_respota int primary key,
    resposta varchar(200)
);
