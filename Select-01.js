const CandyDB = require('./CandyDB')

CandyDB.getCandies(function(candy){

    for(let i=0;candy.length > i;i++){
        console.log(candy[i].id + ":" + candy[i].cname + ":" + candy[i].ctype)
    }

})

/*
create database candy/
use candy;

create table candy(
id int auto_increment not null,
cname varchar(60) null,
ctype varchar(30) null,
primary key(id)
); 

insert into candy values 
(1,'Galak','chocolate'),
(2,'Maria-mole','doce caseiro'),
(3,'tablito','sorvete');

select * from candy

*/
