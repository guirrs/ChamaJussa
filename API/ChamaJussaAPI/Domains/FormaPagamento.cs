using System;
using System.Collections.Generic;

namespace ChamaJussaAPI.Domains;

public partial class FormaPagamento
{
    public Guid formaId { get; set; }

    public string tipo { get; set; } = null!;

    public virtual ICollection<LogTransacao> LogTransacao { get; set; } = new List<LogTransacao>();

    public virtual ICollection<Transacao> Transacao { get; set; } = new List<Transacao>();
}
