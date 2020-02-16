create database burgers_db;
use burgers_db;


CREATE TABLE `burgers` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`burger_name` varchar (255) NOT NULL,
    `devoured` bool,
    primary key (`id`)
    );