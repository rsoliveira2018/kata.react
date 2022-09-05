using desmafagafigando.api.Data;
using desmafagafigando.api.Interfaces;
using desmafagafigando.api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace desmafagafigando.api.Repositories
{
    public abstract class Repository<TEntity> : IRepository<TEntity> where TEntity : Entity, new()
    {
        protected readonly MensagemContext _dbContext;
        protected readonly DbSet<TEntity> _dbSet;

        protected Repository(MensagemContext dbContext)
        {
            _dbContext = dbContext;
            _dbSet = dbContext.Set<TEntity>();
        }

        public virtual async Task AdicionarAsync(TEntity entity)
        {
            _dbSet.Add(entity);
            await SaveChangesAsync();
        }

        public Task Atualizar(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<TEntity>> Buscar(Expression<Func<TEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<TEntity> ObterPorId(Guid id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<TEntity>> ObterTodosAsync()
        {
            return await _dbSet.ToListAsync();
        }

        public Task Remover(Guid id)
        {
            throw new NotImplementedException();
        }

        public async Task<int> SaveChangesAsync()
        {
            return await _dbContext.SaveChangesAsync();
        }

        public void Dispose()
        {
            _dbContext?.Dispose();
        }
    }
}
