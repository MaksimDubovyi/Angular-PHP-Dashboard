CREATE DATABASE Angular;
use Angular;

create table users( id int not null auto_increment primary key, 
name varchar(32) unique, 
login varchar(32) unique, 
pass varchar(128), 
phone varchar(32), 
gender varchar(32), 
email varchar(128))default charset='utf8';   
