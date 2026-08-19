using System;
using System.Collections.Generic;

namespace ChamaJussaAPI.Domains;

public partial class Transacao
{
    public Guid transacaoId { get; set; }

    public decimal valorTransferencia { get; set; }

    public DateTime dataTransacao { get; set; }

    public string? descricao { get; set; }

    public Guid usuarioRemetenteId { get; set; }

    public Guid usuarioDestinatarioId { get; set; }

    public Guid formaPagamentoId { get; set; }

    public virtual ICollection<LogTransacao> LogTransacao { get; set; } = new List<LogTransacao>();

    public virtual FormaPagamento formaPagamento { get; set; } = null!;

    public virtual usuario usuarioDestinatario { get; set; } = null!;

    public virtual usuario usuarioRemetente { get; set; } = null!;
}
