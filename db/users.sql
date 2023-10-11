
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255),
    user_planet VARCHAR(255)
);

alter table users default charset = utf8;
ALTER TABLE users CONVERT TO character SET utf8;
