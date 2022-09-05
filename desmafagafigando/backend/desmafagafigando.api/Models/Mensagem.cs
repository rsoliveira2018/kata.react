using System;
using System.Collections.Generic;

namespace desmafagafigando.api.Models
{
    public partial class Mensagem : Entity
    {
        public Mensagem() : base() { }

        public string Nome { get; set; }
        public string Email { get; set; }
        public string Corpo { get; set; }        
    }
}
