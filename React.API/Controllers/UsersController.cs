using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChatAppData.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace React.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        readonly ChatAppContext Context;

        public UsersController(ChatAppContext context)
        {
            Context = context;
        }
        [HttpGet]
        public IActionResult GetUser()
        {
            var users = Context.Users.ToList();

            return Ok(users);
        }

        [HttpPost]
        public IActionResult CreateUser()
        {
            var users = new Users()
            {
                Username = "George"
            };

            Context.Add(users);
            Context.SaveChanges();

            return Ok("User created successfully!");
        }
    }
}