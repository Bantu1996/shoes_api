-- create table brands(
--     id serial not null primary key,
--     brand_name text not null
-- );

-- create table colors(
--     id serial not null primary key,
--     color text not null
   
-- );

-- create table sizes(
--     id serial not null primary key,
--     size int not null
 
-- );

    -- create table stock_level(
    --     id serial not null primary key,
    --     price decimal(10,2),
    --     qty_in_stock int not null,
    --     brands_id int not null,
    --     colors_id int not null,
    --     sizes_id int not null,
    --     foreign key(brands_id ) references brands(id),
    --     foreign key(colors_id) references colors(id),
    --     foreign key(sizes_id ) references sizes(id)
    -- );


create table brandsList(
    id serial not null primary key,
    brand_name text not null,
    color text not null,
    size int not null,
    price int not null,
    qty_in_stock int not null
     
);



insert into brandsList(id, brand_name, color, size, price, qty_in_stock) values (1, 'Nike', 'Blue', 5, 350, 7);
insert into brandsList(id, brand_name, color, size, price, qty_in_stock) values (2, 'Nike', 'Red', 8, 400, 5);
insert into brandsList(id, brand_name, color, size, price, qty_in_stock) values (3, 'Adidas', 'Black', 8, 500, 4);
insert into brandsList(id, brand_name, color, size, price, qty_in_stock) values (4, 'Reebok', 'Black', 7, 800, 3);
insert into brandsList(id, brand_name, color, size, price, qty_in_stock) values (5, 'Vans', 'Yellow', 8, 200, 2);
insert into brandsList(id, brand_name, color, size, price, qty_in_stock) values (6, 'Crocs', 'White', 8, 250, 7);
insert into brandsList(id, brand_name, color, size, price, qty_in_stock) values (7, 'Vivo', 'Black', 4, 100, 8);
insert into brandsList(id, brand_name, color, size, price, qty_in_stock) values (8, 'Adidas', 'Blue', 8, 900, 4);
insert into brandsList(id, brand_name, color, size, price, qty_in_stock) values (9, 'Reebok', 'Purple', 7, 400, 7);
insert into brandsList(id, brand_name, color, size, price, qty_in_stock) values (10, 'Nike', 'Purple', 9, 700, 9);


insert into brandsList(id, brand_name, color, size, price, qty_in_stock) values (11, 'Adidas', 'Red', 5, 450, 7);
insert into brandsList(id, brand_name, color, size, price, qty_in_stock) values (12, 'Vivo', 'Red', 8, 400, 5);
insert into brandsList(id, brand_name, color, size, price, qty_in_stock) values (13, 'Nike', 'Black', 8, 500, 4);
insert into brandsList(id, brand_name, color, size, price, qty_in_stock) values (14, 'Crocs', 'Black', 7, 800, 3);
insert into brandsList(id, brand_name, color, size, price, qty_in_stock) values (15, 'Nike', 'Yellow', 4, 200, 2);
insert into brandsList(id, brand_name, color, size, price, qty_in_stock) values (16, 'Adidas', 'White', 4, 250, 7);
insert into brandsList(id, brand_name, color, size, price, qty_in_stock) values (17, 'Reebok', 'Black', 4, 100, 8);
insert into brandsList(id, brand_name, color, size, price, qty_in_stock) values (18, 'Vans', 'Blue', 8, 900, 4);
insert into brandsList(id, brand_name, color, size, price, qty_in_stock) values (19, 'Vans', 'Purple', 7, 400, 7);








































-- create table add_cart(
--     id serial not null primary key,
--     all_shoes_id int not null,
--     foreign key(all_shoes_id) references all_shoes(id)
--     );




-- insert into all_shoes(brand, color, price, size, in_stock) values ('Vivo', 'blue', 350, 5, 7);
-- insert into all_shoes(brand, color, price, size, in_stock) values ('Adidas', 'navy', 480, 6, 8);
-- insert into all_shoes(brand, color, price, size, in_stock) values ('Nike', 'white', 780, 8, 9);
-- insert into all_shoes(brand, color, price, size, in_stock) values ('Supega', 'pink', 380, 5, 10);
-- insert into all_shoes(brand, color, price, size, in_stock) values ('Lacoste', 'green', 650, 4, 12);
-- insert into all_shoes(brand, color, price, size, in_stock) values ('Ellese', 'navy', 880, 5, 6);
-- insert into all_shoes(brand, color, price, size, in_stock) values ('Reebok', 'black', 200, 10, 8);
-- insert into all_shoes(brand, color, price, size, in_stock) values ('Converse', 'white', 550, 5, 11);
-- insert into all_shoes(brand, color, price, size, in_stock) values ('Vivo', 'black', 440, 10, 3);
-- insert into all_shoes(brand, color, price, size, in_stock) values ('Adidas', 'yellow', 380, 5, 10);
-- insert into all_shoes(brand, color, price, size, in_stock) values ('Nike', 'red', 980, 10, 3);
-- insert into all_shoes(brand, color, price, size, in_stock) values ('Supega', 'blue', 880, 3, 2);
-- insert into all_shoes(brand, color, price, size, in_stock) values ('Lacoste', 'peach', 750, 2, 2);
-- insert into all_shoes(brand, color, price, size, in_stock) values ('Ellese', 'black', 980, 7, 4);
-- insert into all_shoes(brand, color, price, size, in_stock) values ('Reebok', 'navy', 500, 9, 2);
-- insert into all_shoes(brand, color, price, size, in_stock) values ('Converse', 'yellow', 450, 4, 5);
-- insert into shifts(days) values ('Tuesday');
-- insert into shifts(days) values ('Wednesday');
-- insert into shifts(days) values ('Thursday');
-- insert into shifts(days) values ('Friday');
-- insert into shifts(days) values ('Saturday');
-- insert into shifts(days) values ('Sunday');

--  color : 'blue',
--             brand : 'Mike',
--             price : 350,
--             size : 7,
--             in_stock : 5