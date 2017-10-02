CREATE DATABASE quiz;

USE quiz;

CREATE TABLE spreadsheet (
  id INTEGER Not Null AUTO_INCREMENT,
  question VARCHAR(100) NOT NULL,
  option_1 VARCHAR(50) NOT NULL,
  option_2 VARCHAR(50) NOT NULL,
  option_3 VARCHAR(50) NOT NULL,
  option_4 VARCHAR(50) NOT NULL,
  correct_response INTEGER NOT NULL,
  PRIMARY KEY(id)
);