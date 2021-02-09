using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace React.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        

        [HttpGet]
        public IActionResult GetMessage()
        {
            //var messages = Message.ToList();

            return Ok();
        }

        [HttpPost]
        public IActionResult CreateMessage()
        {
            //var messages = new Message()
            {
                //Text = "This is a sample message"
            };

            //Context.Add(messages);
            //Context.SaveChanges();

            return Ok("Message added successfully!");
        }
    }
}