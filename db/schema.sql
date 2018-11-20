DROP DATABASE IF EXISTS ca7cgyx5lzo0d5dl;
CREATE DATABASE ca7cgyx5lzo0d5dl;
USE ca7cgyx5lzo0d5dl;

-- Create the characters table
CREATE TABLE notes
(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR (255) NOT NULL,
  note VARCHAR (255) NOT NULL,
  PRIMARY KEY(id)
);