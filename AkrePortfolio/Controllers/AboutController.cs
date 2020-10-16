using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AkrePortfolio.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace AkrePortfolio.Controllers
{
    [Route("api/about")]
    [ApiController]
    public class AboutController : ControllerBase
    {
        [HttpGet]
        public About GetAboutInfo()
        {
            string jsonText = System.IO.File.ReadAllText("./Data/about.json");
            return JsonConvert.DeserializeObject<About>(jsonText);
        }
    }
}
