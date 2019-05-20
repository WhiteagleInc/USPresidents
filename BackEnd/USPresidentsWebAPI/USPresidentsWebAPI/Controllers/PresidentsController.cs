using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using USPresidentsWebAPI.Contexts;
using USPresidentsWebAPI.Entities;
using USPresidentsWebAPI.ViewModels;

namespace USPresidentsWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PresidentsController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public PresidentsController(ApplicationDbContext applicationDbContext)
        {
            context = applicationDbContext;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetAsync(OrderByEnum orderByEnum)
        {
            IEnumerable<President> presidents = orderByEnum == OrderByEnum.Ascending ?
                await context.Presidents.OrderBy(x => x.Name).ToListAsync() :
                await context.Presidents.OrderByDescending(x => x.Name).ToListAsync();

            return Ok(presidents);
        }
    }
}