using desmafagafigando.api.Interfaces;
using desmafagafigando.api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace desmafagafigando.api.Controllers
{
    [ApiController]
    [Route("mensagens")]
    public class MensagensController : ControllerBase
    {
        private readonly IMensagemService _mensagemService;

        public MensagensController(IMensagemService mensagemService) {
            _mensagemService = mensagemService;
        }

        [HttpPost]
        [Route("adicionar")]
        public async Task<ActionResult> AdicionarAsync(Mensagem mensagem)
        {
            await _mensagemService.AdicionarAsync(mensagem);
            return Ok(new 
            { 
                success = true,
                data = mensagem
            });
        }
        
        [HttpGet]
        [Route("listar")]
        public async Task<JsonResult> Get()
        {
            var mensagens = await _mensagemService.ListarTodosAsync();
            return new JsonResult(mensagens);
        } 

    }
}
