using ChamaJussaAPI.Contexts;
using ChamaJussaAPI.Domains;
using ChamaJussaAPI.DTOs.OrdemServicoDto;
using ChamaJussaAPI.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ChamaJussaAPI.Repositories
{
    public class LocalRepository : ILocais
    {
        private readonly ChamaJussaContext _context;

        public LocalRepository(ChamaJussaContext context)
        {
            _context = context;
        }

        public List<localizacao> Listar()
        {
            return _context.localizacao.ToList();
        }
    }
}
