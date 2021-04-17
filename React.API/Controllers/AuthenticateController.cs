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

        public IActionResult CreateAuthentication([FromBody] AuthenticationInput authenticationInput)
        {

            var username = authenticationInput.Username;
            var password = authenticationInput.Password;


            var authenticationQueryService = new UserQueryService();
            var user = authenticationQueryService.AuthenticateUser(username, password);

            Console.WriteLine("User logged in succesfully");

            return Ok(new AuthenticationModel
            {
                UserID = user.Id,
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
        public string Password { get; set; }
    }
}
