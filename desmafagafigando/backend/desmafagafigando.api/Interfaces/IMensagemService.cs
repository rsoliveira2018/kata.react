using desmafagafigando.api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace desmafagafigando.api.Interfaces
{
    public interface IMensagemService : IDisposable
    {
        Task<bool> AdicionarAsync(Mensagem mensagem);
        Task<bool> Atualizar(Mensagem mensagem);
        Task<bool> Remover(Mensagem mensagem);
        Task<List<Mensagem>> ListarTodosAsync();
    }
}
