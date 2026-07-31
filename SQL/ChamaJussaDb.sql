

-- Reinicia os IDs das tabelas com IDENTITY
DBCC CHECKIDENT ('fila', RESEED, 0);
DBCC CHECKIDENT ('status', RESEED, 0);
GO

DECLARE @Usuario1 UNIQUEIDENTIFIER = NEWID();
GO
DECLARE @Usuario2 UNIQUEIDENTIFIER = NEWID();
GO
DECLARE @Usuario3 UNIQUEIDENTIFIER = NEWID();
GO
DECLARE @Usuario4 UNIQUEIDENTIFIER = NEWID();
GO

INSERT INTO usuario (usuario_id, nome, email, senha, nif)
VALUES
(@Usuario1,'Ana Martins','ana.martins@empresa.com',HASHBYTES('SHA2_256','Ana@123'),123456789),
(@Usuario2,'Bruno Costa','bruno.costa@empresa.com',HASHBYTES('SHA2_256','Bruno@123'),987654321),
(@Usuario3,'Camila Rocha','camila.rocha@empresa.com',HASHBYTES('SHA2_256','Camila@123'),456123789),
(@Usuario4,'Diego Lima','diego.lima@empresa.com',HASHBYTES('SHA2_256','Diego@123'),741852963);
GO

INSERT INTO fila(nome)
VALUES
('Elétrica'),
('Hidráulica'),
('Informática'),
('Patrimônio'),
('Limpeza');
GO


DECLARE @U1 UNIQUEIDENTIFIER = (SELECT usuario_id FROM usuario WHERE email='ana.martins@empresa.com');
GO
DECLARE @U2 UNIQUEIDENTIFIER = (SELECT usuario_id FROM usuario WHERE email='bruno.costa@empresa.com');
GO
DECLARE @U3 UNIQUEIDENTIFIER = (SELECT usuario_id FROM usuario WHERE email='camila.rocha@empresa.com');
GO
DECLARE @U4 UNIQUEIDENTIFIER = (SELECT usuario_id FROM usuario WHERE email='diego.lima@empresa.com');
GO

INSERT INTO OrdemDeServico
(nome_item,solicitante,dt_criacao,localizacao_id,descricao,imagem,status,fila)
VALUES
('Projetor',@U1,GETDATE(),1,'Projetor da sala de reuniões não liga.',NULL,1,3),

('Ar Condicionado',@U2,DATEADD(DAY,-1,GETDATE()),2,
'Ar condicionado sem refrigeração.',NULL,2,2),

('Computador',@U3,DATEADD(DAY,-2,GETDATE()),3,
'Computador apresenta tela azul.',NULL,1,3),

('Lâmpada',@U4,DATEADD(DAY,-3,GETDATE()),1,
'Lâmpada queimada no corredor.',NULL,3,1),

('Impressora',@U1,DATEADD(DAY,-4,GETDATE()),2,
'Impressora atolando papel.',NULL,2,3),

('Janela',@U2,DATEADD(DAY,-5,GETDATE()),3,
'Janela não fecha corretamente.',NULL,1,4),

('Mesa',@U3,DATEADD(DAY,-6,GETDATE()),1,
'Mesa com um pé quebrado.',NULL,3,4),

('Cadeira',@U4,DATEADD(DAY,-7,GETDATE()),2,
'Cadeira giratória sem regulagem.',NULL,2,4);
GO

SELECT * FROM OrdemDeServico
GO

SELECT * FROM usuario
GO

SELECT * FROM fila
GO

SELECT * FROM status