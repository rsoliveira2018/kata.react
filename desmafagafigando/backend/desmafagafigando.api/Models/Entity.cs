﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace desmafagafigando.api.Models
{
    public abstract class Entity
    {
        public Guid Id { get; set; }

        protected Entity()
        {
            Id = Guid.NewGuid();
        }
    }
}
