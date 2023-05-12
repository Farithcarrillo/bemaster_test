-- Creación de la tabla Autores
CREATE TABLE Autores (
  id_autor INT PRIMARY KEY,
  nombre NVARCHAR(255),
  correo_electronico NVARCHAR(255)
);
GO

-- Creación de la tabla Colaboradores
CREATE TABLE Colaboradores (
  id_colaborador INT PRIMARY KEY,
  nombre NVARCHAR(255),
  correo_electronico NVARCHAR(255)
);
GO

-- Creación de la tabla Videos
CREATE TABLE Videos (
  id_video INT PRIMARY KEY,
  titulo NVARCHAR(255),
  descripcion NVARCHAR(MAX),
  fecha_publicacion DATE,
  duracion INT,
  id_autor INT FOREIGN KEY REFERENCES Autores(id_autor)
);
GO

-- Creación de la tabla Usuarios
CREATE TABLE Usuarios (
  id_usuario INT PRIMARY KEY,
  nombre NVARCHAR(255),
  correo_electronico NVARCHAR(255)
);
GO

-- Creación de la tabla Comentarios
CREATE TABLE Comentarios (
  id_comentario INT PRIMARY KEY,
  texto NVARCHAR(MAX),
  fecha DATE,
  id_usuario INT FOREIGN KEY REFERENCES Usuarios(id_usuario),
  id_video INT FOREIGN KEY REFERENCES Videos(id_video)
);
GO

-- Creación de la tabla Reviews
CREATE TABLE Reviews (
  id_review INT PRIMARY KEY,
  puntuacion INT,
  id_usuario INT FOREIGN KEY REFERENCES Usuarios(id_usuario),
  id_video INT FOREIGN KEY REFERENCES Videos(id_video)
);
GO