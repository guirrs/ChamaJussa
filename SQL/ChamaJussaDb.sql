CREATE DATABASE ChamaJussaDb
GO

USE ChamaJussaDb
GO

CREATE TABLE Usuario (
    usuario_id INT PRIMARY KEY,
    nome VARCHAR(50),
    email VARCHAR(50),
    senha VARBINARY(32),
    nif INT
);
GO

CREATE TABLE Local (
    local_id INT PRIMARY KEY,
    nome VARCHAR(50),
    andar VARCHAR(15)
);
GO

CREATE TABLE Fila (
    fila_id INT IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);
GO

CREATE TABLE Status (
    status_id INT IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(50)
);
GO

CREATE TABLE OrdemServico (
    or_id INT PRIMARY KEY,
    nome_item VARCHAR(50),
    dt_criacao DATETIME,
    descricao VARCHAR(250),
    imagem VARBINARY(MAX),
    status VARCHAR(50),
    status_id INT,
    fila_id INT,
    solicitante INT,
    local_id INT,

    CONSTRAINT FK_OrdemServico_Status
        FOREIGN KEY (status_id)
        REFERENCES Status(status_id),

    CONSTRAINT FK_OrdemServico_Fila
        FOREIGN KEY (fila_id)
        REFERENCES Fila(fila_id),

    CONSTRAINT FK_OrdemServico_Usuario
        FOREIGN KEY (solicitante)
        REFERENCES Usuario(usuario_id),

    CONSTRAINT FK_OrdemServico_Local
        FOREIGN KEY (local_id)
        REFERENCES Local(local_id)
);
GO

-- Usuários
INSERT INTO Usuario (usuario_id, nome, email, senha, nif)
VALUES
(1, 'João Silva', 'joao@email.com', HASHBYTES('SHA2_256', '123456'), 123456789),
(2, 'Maria Souza', 'maria@email.com', HASHBYTES('SHA2_256', '654321'), 987654321),
(3, 'Carlos Lima', 'carlos@email.com', HASHBYTES('SHA2_256', 'abc123'), 456789123);
GO

-- Locais
INSERT INTO Local (local_id, nome, andar)
VALUES
(1, 'Laboratório de Informática', '1º'),
(2, 'Biblioteca', '2º'),
(3, 'Secretaria', 'Térreo');
GO

-- Filas
INSERT INTO Fila (nome)
VALUES
('TI'),
('Manutenção'),
('Infraestrutura');
GO

-- Status
INSERT INTO Status (nome)
VALUES
('Aberta'),
('Em Andamento'),
('Concluída');
GO

-- Ordens de Serviço
INSERT INTO OrdemServico
(or_id, nome_item, dt_criacao, descricao, imagem, status, status_id, fila_id, solicitante, local_id)
VALUES
(1, 'Projetor', GETDATE(), 'Projetor não liga.', NULL, 'Aberta', 1, 1, 1, 1),

(2, 'Ar Condicionado', GETDATE(), 'Equipamento não resfria.', NULL, 'Em Andamento', 2, 2, 2, 2),

(3, 'Computador', GETDATE(), 'Computador sem acesso à internet.', NULL, 'Concluída', 3, 1, 3, 1),

(4, 'Impressora', GETDATE(), 'Impressora atolando papel.', NULL, 'Aberta', 1, 3, 1, 3),

(5, 'Lâmpada', GETDATE(), 'Lâmpada queimada.', NULL, 'Em Andamento', 2, 2, 2, 3);
GO