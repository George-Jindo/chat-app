using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using React.API.ChatAppDB;

namespace React.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        [HttpPost]

        public IActionResult PostRegistration([FromBody] AuthenticationInput authenticationInput)
        {

            var username = authenticationInput.Username;

            var authenticationQueryService = new UserQueryService();
            var users = authenticationQueryService.CreateAuthentication(username);

            Console.WriteLine("User logged in succesfully");

            return Ok(new AuthenticationModel
            {
                UserID = Guid.NewGuid(),
            });
        }
    }

    public class AuthenticationModel
    {
        public Guid UserID { get; set; }
        
    }

    public class AuthenticationInput
    {
        public string Username { get; set; }
    }
}
