create database AlvaradoPr;

use AlvaradoPr;

/* Creación de tablas */
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
    Pass VARCHAR(32)
);

/* SP Para insertar nuevos usuarios a la BD */
delimiter $$
create procedure Crear_Usuario(
	in UserName varchar(20), 
    in Nombre varchar(40), 
    in ApellidoMat varchar(20), 
    in ApellidoPat varchar(20), 
    in Edad int, 
    in Gender varchar(25), 
    in Pass varchar(32))
begin
	insert into Users values (UserName, Nombre, ApellidoMat, ApellidoPat, Edad, Gender);
    insert into UserPass values (UserName, Pass);
end; $$
delimiter ;

/* SP Para actualizar usuarios de la BD */
delimiter $$
create procedure Actualizar_Usuario(
	in UserN varchar(20), 
    in Nombre varchar(40), 
    in ApellidoMat varchar(20), 
    in ApellidoPat varchar(20), 
    in E int, 
    in Gender varchar(25)) 
begin
	update Users 
    set UserName = UserN, Nombres = Nombre, ApellidoMaterno = ApellidoMat, ApellidoPaterno = ApellidoPat, Edad = E, Genero = Gender
    where UserName = UserN;
end; $$
delimiter ;

/* SP Para Eliminar usuarios de la BD */
delimiter $$
create procedure Eliminar_Usuario(
	in UserN varchar(20))
begin
	Delete from UserPass where UserName = UserN;
	Delete from Users where UserName = UserN;
end; $$
delimiter ;

/* Datos de ejemplo */
call Crear_usuario('Mwry', 'Ame', 'Alvarado', 'Preciado', 21, 'Fem', '30b67881f209b9fa8855403b3fc15573');
call Crear_Usuario('Giorno', 'Marcos', 'Alejandro', 'Martinez', 21, 'Masc', 'cfa344f899e963ee80fb492db27fe09a');
call Crear_Usuario('Ger', 'Gerardo', 'Pineda', 'Zapata', 00, 'Masc', 'a4c970222f7b480f13bc2b4fa9a4b6d6');

/* Usuario de prueba de Log - Sus datos de inicio son en minusculas */
call Crear_usuario('luis', 'Usuario', 'de', 'Prueba', 00, '', 'd5cca9df47002e1f69e355be5a307497');
