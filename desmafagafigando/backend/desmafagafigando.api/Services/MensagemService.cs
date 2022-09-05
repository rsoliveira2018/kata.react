using desmafagafigando.api.Interfaces;
using desmafagafigando.api.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace desmafagafigando.api.Services
{
    public class MensagemService : IMensagemService
    {

        private readonly IMensagemRepository _mensagemRepository;

        public MensagemService(IMensagemRepository mensagemRepository)
        {
            _mensagemRepository = mensagemRepository;
        }

        public async Task<bool> AdicionarAsync(Mensagem mensagem)
        {
            //
            // Validar o objeto. Se estiver inválido, retornar 'false'
            // 

            await _mensagemRepository.AdicionarAsync(mensagem);
            return true;
        }

        public Task<bool> Atualizar(Mensagem mensagem)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            _mensagemRepository?.Dispose();
        }

        public async Task<List<Mensagem>> ListarTodosAsync()
        {
            return await _mensagemRepository.ObterTodosAsync();
        }

        public Task<bool> Remover(Mensagem mensagem)
        {
            throw new NotImplementedException();
        }
    }
}
