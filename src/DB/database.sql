DROP database impactview;
CREATE DATABASE IF NOT EXISTS ImpactView;

USE ImpactView;

CREATE TABLE tableros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    correo VARCHAR(255) UNIQUE NOT NULL,
	usuario VARCHAR(255) NOT NULL,
	contraseña VARCHAR(255) NOT NULL,
    id_tablero INT,
    FOREIGN KEY (id_tablero) REFERENCES tableros(id)
) ENGINE=InnoDB;


