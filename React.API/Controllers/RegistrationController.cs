using System;
using Microsoft.AspNetCore.Mvc;
using React.API.ChatAppDB;

namespace React.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {

        [HttpPost]

        public IActionResult PostRegistration([FromBody] RegistrationInput registrationInput)
        {

            var username = registrationInput.Username;
            var email = registrationInput.Email;

            var registrationQueryService = new RegistrationQueryService();
            var users = registrationQueryService.CreateRegistration(username, email);

            Console.WriteLine("User created succesfully");

            return Ok(new RegistrationModel { 
                UserID = Guid.NewGuid(), 
                Username = username,
                Email = email
            });
        }
    }

    public class RegistrationModel
    {
        public Guid UserID { get; set; }
        public string Username { get; set; }

        public string Email { get; set; }
    }

    public class RegistrationInput
    {
        public string Username { get; set; }
        public string Email { get; set; }
    }
}