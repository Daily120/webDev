--Comand Prompt
C:\Users\Admin>psql -U username(owner) database_name
\d --show relations
\dt -- show tables

--To create table
CREATE TABLE users (column_1 text, column_2 int);

--Insert information
INSERT INTO table_name(column_1, column_2) VALUES (value_1, value_2);

--Select
SELECT *(or column name) FROM table_name; -- shema_name.table_name

--Add a column to an existing table
ALTER TABLE table_name ADD column_name datatype;
--Then fill it with data
UPDATE table_name SET some_column = some_value WHERE first_column = some_value or another_value;

--Filter
SELECT * FROM users WHERE name LIKE 'A%'; --% sign means anything after A
SELECT * From users where name LIKE '%y'; --name ends with y

--Sorting
SELECT * FROM users ORDER BY score; --ascenting order
SELECT * FROM users ORDER BY score DESC;--descenting order

--SQL Functions
SELECT AVG(score) FROM users;
SELECT SUM(score) FROM users;
SELECT COUNT(name) FROM users;

--login table example
Create table login ( 
    id serial NOT NULL PRIMARY KEY,
    secret VARCHAR(100) NOT NULL,
    name text UNIQUE NOT NULL
);

--Joining two tables
SELECT * FROM first_table JOIN second_table ON first_table.column_name= second_table.column_name;
SELECT * FROM users JOIN login ON users.name= login.name;

--Deleting row
DELETE FROM users WHERE name='Sally';
--table
DROP TABLE table_name;
