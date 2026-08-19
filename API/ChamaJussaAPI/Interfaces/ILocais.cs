using ChamaJussaAPI.Domains;
using ChamaJussaAPI.DTOs.OrdemServicoDto;

namespace ChamaJussaAPI.Interfaces
{
    public interface ILocais
    {
        List<localizacao> Listar();
    }
}
