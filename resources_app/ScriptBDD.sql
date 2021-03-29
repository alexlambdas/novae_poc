/* CREACION DE LA BASE DE DATOS */
create database db_admin_credit_cards;

/* SELECCION DE LA BASE DE DATOS */
\c db_admin_credit_cards;

/* ELIMINACION DE TABLAS POR PREVENCION */
drop table if exists tb_user;
drop table if exists tb_credit_card;

/* CREAR TABLA DE USUARIO */
create table tb_user(
    id serial,
    dni integer unique not null,
    first_name_1 varchar(20) not null,
    first_name_2 varchar(20),
    last_name_1 varchar(20) not null,
    last_name_2  varchar(20),
    constraint pk_tb_user primary key (id)
);

/* CREAR TABLA DE TARJETA DE CREDITO */
create table tb_credit_card(
    id serial,
    dni integer not null,
    card_number bigint not null,
    card_type varchar(20) not null,
    constraint pk_tb_credit_card primary key (id),
    constraint fk_tb_user foreign key (dni) references tb_user(dni)
);

/* DATA DE PRUEBA DE USUARIOS */
insert into tb_user(dni,first_name_1,first_name_2,last_name_1,last_name_2) values (140487130,'Carol','','Rodriguez','Vivanco');
insert into tb_user(dni,first_name_1,first_name_2,last_name_1,last_name_2) values (140487131,'Angelica','Maria','Perez','Vargas');
insert into tb_user(dni,first_name_1,first_name_2,last_name_1,last_name_2) values (140487132,'Daniel','Felipe','Velandia','Cortes');
insert into tb_user(dni,first_name_1,first_name_2,last_name_1,last_name_2) values (140487133,'Andres','Felipe','Calderon','Pachon');
insert into tb_user(dni,first_name_1,first_name_2,last_name_1,last_name_2) values (140487134,'Samuel','','Lizcano','Martinez');
insert into tb_user(dni,first_name_1,first_name_2,last_name_1,last_name_2) values (140487135,'Diana','Alejandra','Contreras','Contreras');

/* DATA DE PRUEBA DE TRJETAS DE CRÉDITO */
insert into tb_credit_card(card_number,card_type,dni) values (4539189256516124,'visa',140487130);
insert into tb_credit_card(card_number,card_type,dni) values (4673538874447235,'visa',140487130);
insert into tb_credit_card(card_number,card_type,dni) values (4532980557986470,'visa',140487130);
insert into tb_credit_card(card_number,card_type,dni) values (4149523191151898,'visa',140487131);
insert into tb_credit_card(card_number,card_type,dni) values (5227528227546088,'mastercard',140487131);
insert into tb_credit_card(card_number,card_type,dni) values (4539396814789404,'visa',140487132);
insert into tb_credit_card(card_number,card_type,dni) values (4556142879898880,'visa',140487132);
insert into tb_credit_card(card_number,card_type,dni) values (5476888347584221,'mastercard',140487132);
insert into tb_credit_card(card_number,card_type,dni) values (4950456436842484,'visa',140487134);
insert into tb_credit_card(card_number,card_type,dni) values (5430672098238509,'mastercard',140487135);
insert into tb_credit_card(card_number,card_type,dni) values (5227528227543538,'mastercard',140487131);
insert into tb_credit_card(card_number,card_type,dni) values (4539396814789404,'visa',140487132);
insert into tb_credit_card(card_number,card_type,dni) values (4556567892898880,'visa',140487132);
insert into tb_credit_card(card_number,card_type,dni) values (5476888347584221,'mastercard',140487132);
insert into tb_credit_card(card_number,card_type,dni) values (4950456436842484,'visa',140487134);
insert into tb_credit_card(card_number,card_type,dni) values (5439987098233455,'mastercard',140487135);