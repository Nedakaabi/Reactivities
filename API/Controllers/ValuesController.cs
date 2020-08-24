using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Persistence;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;
        public ValuesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Value>>> Get()
        {
            var values = await _context.Values.ToListAsync();
            return Ok(values);

        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Value>> Get(int id)
        {
            var value = await _context.Values.FindAsync(id);
            return Ok(value);

        }
        // private static readonly string[] Summaries = new[]
        // {
        //   "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        // };

        // private readonly ILogger<ValuesController> _logger;

        // public ValuesController(ILogger<ValuesController> logger)
        // {
        //     _logger = logger;
        // }

        //  [HttpGet]
        //  public IEnumerable<WeatherForecast> Get()
        // {
        // var rng = new Random();
        // return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        // {
        // Date = DateTime.Now.AddDays(index),
        // TemperatureC = rng.Next(-20, 55),
        // Summary = Summaries[rng.Next(Summaries.Length)]
        // })
        // .ToArray();
        // }
    }
}
