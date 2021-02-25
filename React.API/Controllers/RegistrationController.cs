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
    public class RegistrationController : ControllerBase
    {

        [HttpPost]

        public IActionResult PostMessage([FromBody] RegistrationInput registrationInput)
        {

            var username = registrationInput.Username;
            var email = registrationInput.Email;
            var password = registrationInput.Password;

            Console.WriteLine("User created succesfully");

            return Ok(username);
        }
    }

    public class RegistrationInput
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }

        public string Password { get; set; }
        public DateTime Created_At { get; set; }
    }
}