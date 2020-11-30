create table brands(
    id serial not null primary key,
    brand_name text not null
    );

create table colors(
    id serial not null primary key,
    color text not null,
     brands_id int not null,
    foreign key(brands_id ) references brands(id)
    );

create table sizes(
    id serial not null primary key,
    size int not null,
     brands_id int not null,
    foreign key(brands_id ) references brands(id)
    );


    create table prices(
    id serial not null primary key,
    price decimal(10,2),
     brands_id int not null,
    foreign key(brands_id ) references brands(id)
    );


    create table in_stock(
        id serial not null primary key,
        in_stock int not null,
        brands_id int not null,
        foreign key(brands_id ) references brands(id),
        colors_id int not null,
        foreign key(colors_id) references colors(id),
        size_id int not null,
        foreign key(size_id ) references sizes(id),
        prices_id int not null,
        foreign key(prices_id ) references prices(id)
        );




































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