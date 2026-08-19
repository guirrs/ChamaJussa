USE master;
GO

/* ============================================================
   1. CRIAÇÃO DO BANCO
   ============================================================ */

IF DB_ID(N'ChamaJussa') IS NOT NULL
BEGIN
    THROW 50000, 'O banco de dados ChamaJussa já existe. Para recriá-lo, remova-o antes de executar este script.', 1;
END;
GO

CREATE DATABASE [ChamaJussa];
GO

ALTER DATABASE [ChamaJussa] SET RECOVERY SIMPLE;
GO

ALTER DATABASE [ChamaJussa] SET COMPATIBILITY_LEVEL = 160;
GO

USE [ChamaJussa];
GO


/* ============================================================
   2. TABELA FILA
   ============================================================ */

CREATE TABLE [dbo].[fila]
(
    [fila_id] INT IDENTITY(1,1) NOT NULL,
    [nome] VARCHAR(50) NOT NULL,

    CONSTRAINT [PK_fila]
        PRIMARY KEY CLUSTERED ([fila_id])
);
GO


/* ============================================================
   3. TABELA LOCALIZAÇÃO
   ============================================================ */

CREATE TABLE [dbo].[localizacao]
(
    [localizacao_id] INT IDENTITY(1,1) NOT NULL,
    [nome] VARCHAR(50) NOT NULL,
    [andar] VARCHAR(15) NOT NULL,

    CONSTRAINT [PK_localizacao]
        PRIMARY KEY CLUSTERED ([localizacao_id])
);
GO


/* ============================================================
   4. TABELA STATUS
   ============================================================ */

CREATE TABLE [dbo].[status]
(
    [status_id] INT IDENTITY(1,1) NOT NULL,
    [nome] VARCHAR(30) NOT NULL,

    CONSTRAINT [PK_status]
        PRIMARY KEY CLUSTERED ([status_id])
);
GO


/* ============================================================
   5. TABELA USUÁRIO
   ============================================================ */

CREATE TABLE [dbo].[usuario]
(
    [usuario_id] UNIQUEIDENTIFIER NOT NULL
        CONSTRAINT [DF_usuario_usuario_id] DEFAULT NEWID(),

    [nome] VARCHAR(50) NOT NULL,

    [email] VARCHAR(50) NOT NULL,

    [senha] VARBINARY(32) NOT NULL,

    [nif] INT NOT NULL,

    CONSTRAINT [PK_usuario]
        PRIMARY KEY CLUSTERED ([usuario_id]),

    CONSTRAINT [UQ_usuario_email]
        UNIQUE ([email]),

    CONSTRAINT [UQ_usuario_nif]
        UNIQUE ([nif])
);
GO


/* ============================================================
   6. TABELA ORDEM DE SERVIÇO
   ============================================================ */

CREATE TABLE [dbo].[OrdemDeServico]
(
    [os_id] INT IDENTITY(1,1) NOT NULL,

    [nome_item] VARCHAR(50) NOT NULL,

    [solicitante] UNIQUEIDENTIFIER NULL,

    [dt_criacao] DATETIME NOT NULL
        CONSTRAINT [DF_OrdemDeServico_dt_criacao]
        DEFAULT GETDATE(),

    [localizacao_id] INT NULL,

    [descricao] VARCHAR(255) NOT NULL,

    [imagem] VARCHAR(MAX) NULL,

    [status] INT NULL,

    [fila] INT NULL,

    CONSTRAINT [PK_OrdemDeServico]
        PRIMARY KEY CLUSTERED ([os_id])
);
GO


/* ============================================================
   7. FOREIGN KEYS
   ============================================================ */

ALTER TABLE [dbo].[OrdemDeServico]
ADD CONSTRAINT [FK_OrdemDeServico_Fila]
FOREIGN KEY ([fila])
REFERENCES [dbo].[fila] ([fila_id]);
GO

ALTER TABLE [dbo].[OrdemDeServico]
ADD CONSTRAINT [FK_OrdemDeServico_Localizacao]
FOREIGN KEY ([localizacao_id])
REFERENCES [dbo].[localizacao] ([localizacao_id]);
GO

ALTER TABLE [dbo].[OrdemDeServico]
ADD CONSTRAINT [FK_OrdemDeServico_Status]
FOREIGN KEY ([status])
REFERENCES [dbo].[status] ([status_id]);
GO

ALTER TABLE [dbo].[OrdemDeServico]
ADD CONSTRAINT [FK_OrdemDeServico_Usuario]
FOREIGN KEY ([solicitante])
REFERENCES [dbo].[usuario] ([usuario_id]);
GO


/* ============================================================
   8. DADOS INICIAIS - FILAS
   ============================================================ */

SET IDENTITY_INSERT [dbo].[fila] ON;
GO

INSERT INTO [dbo].[fila] ([fila_id], [nome])
VALUES
    (1, 'Geral'),
    (2, 'Suporte'),
    (3, 'Manutenção');
GO

SET IDENTITY_INSERT [dbo].[fila] OFF;
GO


/* ============================================================
   9. DADOS INICIAIS - LOCALIZAÇÕES
   ============================================================ */

SET IDENTITY_INSERT [dbo].[localizacao] ON;
GO

INSERT INTO [dbo].[localizacao]
    ([localizacao_id], [nome], [andar])
VALUES
    (1,  'Sala do Diretor', 'Térreo'),
    (2,  'Sala da Coordenação da Faculdade', 'Térreo'),
    (3,  'Sala de Reunião', 'Térreo'),
    (4,  'Secretaria', 'Térreo'),
    (5,  'Biblioteca', 'Térreo'),
    (6,  'Copa dos Funcionários', 'Térreo'),
    (7,  'Atendimento', 'Térreo'),
    (8,  'Sala 1', '1º Andar'),
    (9,  'Sala 2', '1º Andar'),
    (10, 'Sala 3', '1º Andar'),
    (11, 'Sala 04/05', '1º Andar'),
    (12, 'Sala 06/07', '1º Andar'),
    (13, 'Studio', '1º Andar'),
    (14, 'Mesacast', '1º Andar');
GO

SET IDENTITY_INSERT [dbo].[localizacao] OFF;
GO


/* ============================================================
   10. DADOS INICIAIS - STATUS
   ============================================================ */

SET IDENTITY_INSERT [dbo].[status] ON;
GO

INSERT INTO [dbo].[status]
    ([status_id], [nome])
VALUES
    (1, 'Aberto'),
    (2, 'Em andamento'),
    (3, 'Concluído'),
    (4, 'Cancelado');
GO

SET IDENTITY_INSERT [dbo].[status] OFF;
GO


/* ============================================================
   11. USUÁRIO INICIAL
   ============================================================ */

INSERT INTO [dbo].[usuario]
(
    [usuario_id],
    [nome],
    [email],
    [senha],
    [nif]
)
VALUES
(
    '8c7b9660-e897-4935-9bb8-dbce3f2ad542',
    'samanta',
    'samanta@email.com',
    0x55A5E9E78207B4DF8699D60886FA070079463547B095D1A05BC719BB4E6CD251,
    1234567
);
GO


/* ============================================================
   12. ORDENS DE SERVIÇO INICIAIS
   ============================================================ */

SET IDENTITY_INSERT [dbo].[OrdemDeServico] ON;
GO

INSERT INTO [dbo].[OrdemDeServico]
(
    [os_id],
    [nome_item],
    [solicitante],
    [dt_criacao],
    [localizacao_id],
    [descricao],
    [imagem],
    [status],
    [fila]
)
VALUES
(
    2,
    'teste',
    '8c7b9660-e897-4935-9bb8-dbce3f2ad542',
    '2026-07-29T19:29:13.713',
    1,
    'teste',
    '/uploads/os-01c1acbb-b740-467a-ab2e-1eb9b13c91a8.png',
    1,
    1
);
GO

INSERT INTO [dbo].[OrdemDeServico]
(
    [os_id],
    [nome_item],
    [solicitante],
    [dt_criacao],
    [localizacao_id],
    [descricao],
    [imagem],
    [status],
    [fila]
)
VALUES
(
    3,
    'string',
    '8c7b9660-e897-4935-9bb8-dbce3f2ad542',
    '2026-07-31T08:18:05.880',
    1,
    'string',
    '/uploads/os-1fa50191-bbb2-4a6c-8a68-844d9f1061c2.jpg',
    1,
    1
);
GO

SET IDENTITY_INSERT [dbo].[OrdemDeServico] OFF;
GO


/* ============================================================
   13. VERIFICAÇÃO
   ============================================================ */

SELECT 'Banco criado com sucesso!' AS mensagem;
GO

SELECT * FROM [dbo].[fila];
GO

SELECT * FROM [dbo].[localizacao];
GO

SELECT * FROM [dbo].[status];
GO

SELECT * FROM [dbo].[usuario];
GO

SELECT * FROM [dbo].[OrdemDeServico];
GO
