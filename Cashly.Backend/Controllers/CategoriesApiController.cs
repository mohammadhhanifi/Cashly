using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cashly.Backend.DB;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Cashly.Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesApiController(CashlyDbContext db) : ControllerBase
    {
        private readonly CashlyDbContext _db = db;

        [HttpGet("list")]
        public async Task<IActionResult> List()
        {
            var categories = await _db.Categories
            .AsNoTracking()
            .ToListAsync();

            return Ok(categories);
        }

    }
}