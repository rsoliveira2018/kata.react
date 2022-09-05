using desmafagafigando.api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace desmafagafigando.api.Interfaces
{
    public interface IMensagemRepository : IRepository<Mensagem>
    {
        Task<Mensagem> BuscarMensagemPorTrechoDoCorpo(Guid usuarioId);
    }
}
