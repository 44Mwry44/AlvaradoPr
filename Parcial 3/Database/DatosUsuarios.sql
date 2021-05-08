create database MiPagina;

create table Users(
	UserName varchar(20) primary key,
    Nombres varchar(40),
    ApellidoMaterno varchar(20),
    ApellidoPaterno varchar(20),
    Edad int,
    Genero varchar(25)
);

create table UserPass(
	UserName varchar(20), foreign key (UserName) references Users(UserName),
    Pass varchar(30),
    check (length(Pass) >= 8) /* El Password debe ser minimo de 8 caracteres */
)