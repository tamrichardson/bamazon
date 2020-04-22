drop database if exists bamazon;

create database bamazon;
use bamazon;

create table productsTable
(
    item_id integer not null,
    product_name varchar (50) null,
    department_name varchar (50) null,
    price decimal (12,2) null,
    stock_quantity integer null,
    primary key (item_id)
);



