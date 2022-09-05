using desmafagafigando.api.Data;
using desmafagafigando.api.Interfaces;
using desmafagafigando.api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace desmafagafigando.api.Repositories
{
    public class MensagemRepository : Repository<Mensagem>, IMensagemRepository
    {
        public MensagemRepository(MensagemContext mensagemContext) : base(mensagemContext) { }

        public Task<Mensagem> BuscarMensagemPorTrechoDoCorpo(Guid usuarioId)
        {
            throw new NotImplementedException();
        }
    }
}
