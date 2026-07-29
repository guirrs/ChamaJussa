using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChamaJussaAPI.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "fila",
                columns: table => new
                {
                    fila_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nome = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__fila__79CFDF2361F5E5BC", x => x.fila_id);
                });

            migrationBuilder.CreateTable(
                name: "localizacao",
                columns: table => new
                {
                    localizacao_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nome = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    andar = table.Column<string>(type: "varchar(15)", unicode: false, maxLength: 15, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__localiza__91EC50FDE29706B0", x => x.localizacao_id);
                });

            migrationBuilder.CreateTable(
                name: "status",
                columns: table => new
                {
                    status_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nome = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__status__3683B531A72E7965", x => x.status_id);
                });

            migrationBuilder.CreateTable(
                name: "usuario",
                columns: table => new
                {
                    usuario_id = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "(newid())"),
                    nome = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    email = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    senha = table.Column<byte[]>(type: "varbinary(32)", maxLength: 32, nullable: false),
                    nif = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__usuario__2ED7D2AF4F83E425", x => x.usuario_id);
                });

            migrationBuilder.CreateTable(
                name: "OrdemDeServico",
                columns: table => new
                {
                    os_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nome_item = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    solicitante = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    dt_criacao = table.Column<DateTime>(type: "datetime", nullable: false, defaultValueSql: "(getdate())"),
                    localizacao_id = table.Column<int>(type: "int", nullable: true),
                    descricao = table.Column<string>(type: "varchar(255)", unicode: false, maxLength: 255, nullable: false),
                    imagem = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true),
                    status = table.Column<int>(type: "int", nullable: true),
                    fila = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__OrdemDeS__374FA4B502ACC0D3", x => x.os_id);
                    table.ForeignKey(
                        name: "FK_OrdemDeServico_Fila",
                        column: x => x.fila,
                        principalTable: "fila",
                        principalColumn: "fila_id");
                    table.ForeignKey(
                        name: "FK_OrdemDeServico_Localizacao",
                        column: x => x.localizacao_id,
                        principalTable: "localizacao",
                        principalColumn: "localizacao_id");
                    table.ForeignKey(
                        name: "FK_OrdemDeServico_Status",
                        column: x => x.status,
                        principalTable: "status",
                        principalColumn: "status_id");
                    table.ForeignKey(
                        name: "FK_OrdemDeServico_Usuario",
                        column: x => x.solicitante,
                        principalTable: "usuario",
                        principalColumn: "usuario_id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrdemDeServico_fila",
                table: "OrdemDeServico",
                column: "fila");

            migrationBuilder.CreateIndex(
                name: "IX_OrdemDeServico_localizacao_id",
                table: "OrdemDeServico",
                column: "localizacao_id");

            migrationBuilder.CreateIndex(
                name: "IX_OrdemDeServico_solicitante",
                table: "OrdemDeServico",
                column: "solicitante");

            migrationBuilder.CreateIndex(
                name: "IX_OrdemDeServico_status",
                table: "OrdemDeServico",
                column: "status");

            migrationBuilder.CreateIndex(
                name: "UQ__usuario__AB6E61647E3CD976",
                table: "usuario",
                column: "email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ__usuario__DF97D0F2C540B210",
                table: "usuario",
                column: "nif",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrdemDeServico");

            migrationBuilder.DropTable(
                name: "fila");

            migrationBuilder.DropTable(
                name: "localizacao");

            migrationBuilder.DropTable(
                name: "status");

            migrationBuilder.DropTable(
                name: "usuario");
        }
    }
}
