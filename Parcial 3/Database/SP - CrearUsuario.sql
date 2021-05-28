use MiPagina;

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