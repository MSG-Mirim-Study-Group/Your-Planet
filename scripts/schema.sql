CREATE DATABASE IF NOT EXISTS YourPlanet;

CREATE USER IF NOT EXISTS 'root'@'localhost' IDENTIFIED BY '1234';
CREATE USER IF NOT EXISTS 'your-planet'@'localhost' IDENTIFIED BY '1234';

GRANT ALL PRIVILEGES ON YourPlanet.* TO 'your-planet'@'localhost' WITH GRANT OPTION;

USE YourPlanet;

CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255),
    user_planet VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS planets (
    planet_id INT AUTO_INCREMENT PRIMARY KEY,
    planet_name VARCHAR(255)
);

INSERT IGNORE INTO planets (planet_name) VALUES
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

ALTER TABLE users DEFAULT CHARSET = utf8;
ALTER TABLE users CONVERT TO CHARACTER SET utf8;

ALTER TABLE planets DEFAULT CHARSET = utf8;
ALTER TABLE planets CONVERT TO CHARACTER SET utf8;
