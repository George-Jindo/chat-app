﻿using Microsoft.AspNetCore.Mvc;
using React.API.ChatAppDB;
using System;

namespace React.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        [HttpGet]

        public IActionResult GetUser()
        {
            var userQueryService = new UserQueryService();

            var users = userQueryService.QueryUsers();

            users.ForEach(u => Console.WriteLine(u.Username));

            return Ok(users);
        }

        
    }
    
}