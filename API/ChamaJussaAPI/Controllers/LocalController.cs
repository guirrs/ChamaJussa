using ChamaJussaAPI.Applications.Services;
using ChamaJussaAPI.Domains;
using ChamaJussaAPI.DTOs.OrdemServicoDto;
using ChamaJussaAPI.Exceptions;
using ChamaJussaAPI.Interfaces;
using ChamaJussaAPI.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChamaJussaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocalController : ControllerBase
    {
        private readonly ILocais _repository;

        public LocalController(ILocais repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public ActionResult<List<localizacao>> Listar()
        {
            try
            {
                var locais = _repository.Listar();
                return Ok(locais);
            }
            catch (DomainException ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }
    }
}
