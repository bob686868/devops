CREATE TABLE IF NOT EXISTS pets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create the table
CREATE TABLE IF NOT EXISTS pets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create a user that can connect from any host
CREATE USER IF NOT EXISTS 'root'@'%' IDENTIFIED BY 'password123';
GRANT ALL PRIVILEGES ON my_db.* TO 'root'@'%';
FLUSH PRIVILEGES;