create database bamazon;
use bamazon;
drop table productsTable;
create table productsTable
(
    item_id integer not null,
    product_name varchar (50) null,
    department_name varchar (50) null,
    price decimal (12,2) null,
    stock_quantity integer null,
    primary key (item_id)
);

select *
from productsTable;

insert into productsTable
    (item_id, product_name, department_name, price, stock_quantity)
values
    (303, 'chew toy', 'pet', 4.00, 25);
insert into productsTable
    (item_id, product_name, department_name, price, stock_quantity)
values
    (305, 'venison jerky', 'pet', 11.00, 10);
insert into productsTable
    (item_id, product_name, department_name, price, stock_quantity)
values
    (206, 'bath bombs', 'bath', 6.00, 18);
insert into productsTable
    (item_id, product_name, department_name, price, stock_quantity)
values
    (209, 'color drops', 'bath', 3.00, 30);
insert into productsTable
    (item_id, product_name, department_name, price, stock_quantity)
values
    (701, 'muppet fur pillow', 'home', 25.00, 10);
insert into productsTable
    (item_id, product_name, department_name, price, stock_quantity)
values
    (703, 'yeti skin rug', 'home', 100.00, 2);
insert into productsTable
    (item_id, product_name, department_name, price, stock_quantity)
values
    (552, 'eye of newt', 'kitchen', 2.00, 300);
insert into productsTable
    (item_id, product_name, department_name, price, stock_quantity)
values
    (554, 'burrowing worms stinger', 'kitchen', 5.00, 100);
insert into productsTable
    (item_id, product_name, department_name, price, stock_quantity)
values
    (691, 'velociraptor', 'home security', 600.00, 23);
insert into productsTable
    (item_id, product_name, department_name, price, stock_quantity)
values
    (696, 'microraptor', 'home security', 300.00, 11);
       
 
 


 
 