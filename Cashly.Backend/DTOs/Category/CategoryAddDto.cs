using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cashly.Backend.Enums;

namespace Cashly.Backend.DTOs.Category
{
    public class CategoryAddDto
    {
        public required CategoryType Type { get; set; }
        public required string Title { get; set; }
        public required string Color { get; set; }
        public required string Icon { get; set; }
    }
}