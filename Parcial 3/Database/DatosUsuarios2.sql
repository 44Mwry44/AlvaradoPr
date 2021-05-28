create database MiPagina;

use MiPagina;

create table Users(
	UserName varchar(20) primary key,
    Nombres varchar(40),
    ApellidoMaterno varchar(20),
    ApellidoPaterno varchar(20),
    Edad int,
    Genero varchar(25)
);

CREATE TABLE UserPass (
    UserName VARCHAR(20),
    FOREIGN KEY (UserName)
        REFERENCES Users (UserName),
    Pass VARCHAR(32),
    CHECK (LENGTH(Pass) >= 8)
)