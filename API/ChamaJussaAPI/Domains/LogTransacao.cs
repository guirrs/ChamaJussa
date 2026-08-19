using System;
using System.Collections.Generic;

namespace ChamaJussaAPI.Domains;

public partial class LogTransacao
{
    public Guid logTransacaoId { get; set; }

    public decimal valorTransferencia { get; set; }

    public DateTime dataTransacao { get; set; }

    public string? descricao { get; set; }

    public Guid transacaoId { get; set; }

    public Guid formaPagamentoId { get; set; }

    public virtual FormaPagamento formaPagamento { get; set; } = null!;

    public virtual Transacao transacao { get; set; } = null!;
}
