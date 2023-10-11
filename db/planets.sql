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


alter table planets default charset = utf8;
ALTER TABLE planets CONVERT TO character SET utf8;