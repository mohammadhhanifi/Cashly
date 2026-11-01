using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cashly.Backend.DB;
using Cashly.Backend.DTOs.Category;
using Cashly.Backend.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Cashly.Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesApiController(CashlyDbContext db) : ControllerBase
    {
        private readonly CashlyDbContext _db = db;
        // temporary until authentication exists. Replace with the authenticated user's id.
        private const string TempUserId = "temp-user";

        [HttpGet("list")]
        public async Task<IActionResult> List()
        {
            var categories = await _db.Categories
            .AsNoTracking()
            .ToListAsync();

            return Ok(categories);
        }

        [HttpPost("add")]
        public async Task<IActionResult> Add(CategoryAddDto dto)
        {




            var category = new Category
            {
                Icon = dto.Icon,
                Type = dto.Type,
                Title = dto.Title,
                Color = dto.Color,
                UserId = TempUserId

            };

            await _db.Categories.AddAsync(category);
            await _db.SaveChangesAsync();
            return Ok(category);

        }

    }
}