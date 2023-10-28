CREATE DATABASE IF NOT EXISTS gersa_admin;

CREATE TABLE IF NOT EXISTS usuarios(
    usuario VARCHAR(255),
    pass VARCHAR(255),
    rol VARCHAR(255)
);
