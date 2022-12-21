CREATE SCHEMA `motostore` ;

CREATE TABLE `motostore`.`users` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `username` VARCHAR(100) NULL,
  `password` VARCHAR(100) NULL,
  `birthday` VARCHAR(45) NULL,
  `createdAt` VARCHAR(45) NULL,
  `updatedAt` VARCHAR(45) NULL,
  PRIMARY KEY (`id_user`));

 
 INSERT INTO `motostore`.`users`
(`id`,
`name`,
`lastname`,
`email`,
`username`,
`password`,
`birthday`)
VALUES
(1,
'Marco',
'Albertini',
'marlbertini@gmail.com',
'Marco',
'$2b$10$66zB63k.oDOYChKChqXzDu1/hBchq0Z8.BBlalchu4bz4RTQSFP9G',
'30-10-1989');

CREATE TABLE `motostore`.`products` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `image` VARCHAR(100) NULL,
  `price` INT NULL,  
  `createdAt` VARCHAR(45) NULL,
  `updatedAt` VARCHAR(45) NULL,
  PRIMARY KEY (`id_product`));

 INSERT INTO `motostore`.`products`
(`id`,
`name`,
`description`,
`image`,
`price`)
VALUES
(1,
'Casco',
'Agv Corsa',
'img_1.jpg'
300),
(2,
'Guantes',
'Dainese Ultra Corsa',
'img_2.jpg',
10),
(3,
'Botas',
'img_3.jpg',
'Dainses Torque In',
200),
(4,
'Campera',
'Dainese Touring',
230),
(5,
'Pantalon',
'img_1.jpg',
'Dainses All Weather',
280),;
