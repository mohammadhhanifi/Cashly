using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cashly.Backend.Base;
using Cashly.Backend.Enums;

namespace Cashly.Backend.Entities
{
    public class Category : Thing
    {   
        public required string UserId { get; set; }
        public required CategoryType Type { get; set; }
        public required string Title { get; set; }
        public required string Color { get; set; }
        public required string Icon { get; set; }
    }
}