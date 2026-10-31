using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Cashly.Backend.DB
{
    public class CashlyDbContext(DbContextOptions<CashlyDbContext> options) : DbContext(options)
    {   
        
        
    }
}