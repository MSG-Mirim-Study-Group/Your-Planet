CREATE DATABASE YourPlanet;

CREATE USER 'root'@'localhost' IDENTIFIED BY '1234';

CREATE USER 'your-planet'@'localhost' IDENTIFIED BY '1234';

GRANT ALL PRIVILEGES ON YourPlanet.* TO 'your-planet'@'localhost' WITH GRANT OPTION;

use YourPlanet;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255),
    user_planet VARCHAR(255)
);

CREATE TABLE planets (
    planet_id INT AUTO_INCREMENT PRIMARY KEY,
    planet_name VARCHAR(255)
);

INSERT INTO planets (planet_name) VALUES
('planet_Earth'),
('planet_Moon'),
('planet_Sun'),
('planet_Mercury'),
('planet_Venus'),
('planet_Mars'),
('planet_Jupiter'),
('planet_Saturn'),
('planet_Uranus'),
('planet_Neptune'),
('Pluto');

alter table users default charset = utf8;
ALTER TABLE users CONVERT TO character SET utf8;

alter table planets default charset = utf8;
ALTER TABLE planets CONVERT TO character SET utf8;