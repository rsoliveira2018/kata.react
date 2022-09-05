using desmafagafigando.api.Models;
using System;
using System.Linq;

namespace desmafagafigando.api.Data
{
    public class DbInitializer
    {
        public static void Initialize(MensagemContext mensagemContext)
        {
            mensagemContext.Database.EnsureCreated();

            if (mensagemContext.Mensagem.Any()) return;

            var mensagens = new Mensagem[]
            {
                new Mensagem{Corpo="Corpo da Mensagem, Message Body, Cuerpo del Mensaje", Email="mensageiro@teste.com", Id=Guid.NewGuid(), Nome="Mensageiro Obtuso"},
                new Mensagem{Corpo="Um Outro Corpo de Mensagem, Another Message Body, Un Otro Cuerpo de Mensaje", Email="messenger@teste.com", Id=Guid.NewGuid(), Nome="Weird Messenger"},
                new Mensagem{Corpo="Another message being added just to test the MySql Server container", Email="mysql@teste.com", Id=Guid.NewGuid(), Nome="MySqlServer Messenger"},
                new Mensagem{Corpo="Mais um Corpo da Mensagem, Yet Another Message Body, Más un Cuerpo de Mensaje", Email="mensajero@teste.com", Id=Guid.NewGuid(), Nome="Mensajero Pendejo"}
            };

            foreach (Mensagem msg in mensagens) mensagemContext.Add(msg);
            mensagemContext.SaveChanges();

        }
    }
}
