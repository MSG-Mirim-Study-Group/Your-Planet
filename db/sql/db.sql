CREATE DATABASE YourPlanet;

CREATE USER 'root'@'localhost' IDENTIFIED BY '1234';

CREATE USER 'your-planet'@'localhost' IDENTIFIED BY '1234';

GRANT ALL PRIVILEGES ON YourPlanet.* TO 'your-planet'@'localhost' WITH GRANT OPTION;

use YourPlanet;