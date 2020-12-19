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
    public class MessagesController : ControllerBase
    {
        readonly ChatAppContext Context;

        public MessagesController(ChatAppContext context)
        {
            Context = context;
        }

        [HttpGet]
        public IActionResult GetMessage()
        {
            var messages = Context.Message.ToList();

            return Ok(messages);
        }

        [HttpPost]
        public IActionResult CreateMessage()
        {
            var messages = new Message()
            {
                Text = "This is a sample message"
            };

            Context.Add(messages);
            Context.SaveChanges();

            return Ok("Message added successfully!");
        }
    }
}