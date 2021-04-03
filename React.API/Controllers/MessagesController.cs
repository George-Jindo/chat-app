using System;
using Microsoft.AspNetCore.Mvc;
using React.API.ChatAppDB;

namespace React.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {


        [HttpGet]
        public IActionResult GetMessage()
        {
            var messageQueryService = new MessageQueryService();

            var messages = messageQueryService.QueryMessages();

            messages.ForEach(m => Console.WriteLine(m.Text));

            return Ok(messages);
        }

        [HttpPost]

        public IActionResult PostMessage([FromBody] Message message)
        {
            var text = message.Text;
            var messageQueryService = new MessageQueryService();

            var messages = messageQueryService.CreateMessages(text);
                  

            Console.WriteLine("Message added succesfully");

            return Ok(new MessageModel
            {
                Text = text
            });
        }
    }
}