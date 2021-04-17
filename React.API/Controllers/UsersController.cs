using Microsoft.AspNetCore.Mvc;
using React.API.ChatAppDB;
using System;
using System.Collections.Generic;

namespace React.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        [HttpGet]

        public IActionResult GetUser([FromQuery(Name = "username")] string username)
        {
            var userQueryService = new UserQueryService();

            var users = userQueryService.QueryUser(username);

            //users.ForEach(u => Console.WriteLine(u.Username));

            return Ok(users);
        }

        
    }
    
}