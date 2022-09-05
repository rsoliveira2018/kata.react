using desmafagafigando.api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace desmafagafigando.api.Interfaces
{
    public interface IRepository<TEntity> : IDisposable where TEntity: Entity
    {
        Task AdicionarAsync(TEntity entity);
        Task<TEntity> ObterPorId(Guid id);
        Task<List<TEntity>> ObterTodosAsync();
        Task Atualizar(TEntity entity);
        Task Remover(Guid id);
        Task<IEnumerable<TEntity>> Buscar(Expression<Func<TEntity, bool>> predicate);
        Task<int> SaveChangesAsync();
    }
}
