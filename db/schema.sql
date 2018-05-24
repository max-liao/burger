### Schema
USE wsxdz8gxloo7tjq1;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean NOT NULL,
    createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);
