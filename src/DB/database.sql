DROP database impactview;
CREATE DATABASE IF NOT EXISTS ImpactView;

USE ImpactView;

CREATE TABLE tableros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

-- Crear la tabla de usuarios
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    correo VARCHAR(255) UNIQUE NOT NULL,
    id_tablero INT,
    FOREIGN KEY (id_tablero) REFERENCES tableros(id)
) ENGINE=InnoDB;

CREATE TABLE auth (
	id INT PRIMARY KEY,
	usuario VARCHAR(20) NOT NULL,
    pass VARCHAR(20) NOT NULL
) ENGINE=InnoDB;


