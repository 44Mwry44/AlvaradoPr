use MiPagina;

select * from users;

insert into users values ('Mwry', 'Ame', 'Alvarado', 'Preciado', 21, 'Fem');
insert into userpass values ('Mwry', '30b67881f209b9fa8855403b3fc15573');


update userpass
set Pass = '30b67881f209b9fa8855403b3fc15573'
where UserName = 'Mwry';

delete from userpass where UserName = 'Mwry'