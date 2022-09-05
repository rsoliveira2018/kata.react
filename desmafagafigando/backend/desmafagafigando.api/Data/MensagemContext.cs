using desmafagafigando.api.Models;
using Microsoft.EntityFrameworkCore;

namespace desmafagafigando.api.Data
{
    public partial class MensagemContext : DbContext
    {
        public MensagemContext(DbContextOptions<MensagemContext> options) : base(options) { }

        public virtual DbSet<Mensagem> Mensagem { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Mensagem>().ToTable("mensagem");
        }
    }
}
