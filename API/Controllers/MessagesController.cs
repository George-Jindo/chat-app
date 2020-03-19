using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Chatterbox.Models;
using Microsoft.AspNetCore.Mvc;
using Npgsql;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        // GET api/messages
        [HttpGet]
        public ActionResult<IEnumerable<Message>> Get()
        {



            var renderMessages = new List<Message>();
            try
            {
                string connstring = "Server=localhost; Port=5432; User Id=gjindo; Password=CamaroZ28; Database=chatterbox;";
                NpgsqlConnection connection = new NpgsqlConnection(connstring);
                connection.Open();
                NpgsqlCommand command = new NpgsqlCommand("SELECT * FROM public.messages", connection);
                NpgsqlDataReader dataReader = command.ExecuteReader();
                for (int i = 0; dataReader.Read(); i++)

                {

                    //renderMessages.Add(dataReader[Message].ToString() + "," + dataReader[1].ToString() + "," + dataReader[2].ToString() + "\r\n");
                    renderMessages.Add(new Message
                    {
                        Name = Convert.ToString(dataReader[1]),
                        Text = Convert.ToString(dataReader[2]),
                        Date = Convert.ToString(dataReader[3])
                    });

                }
                connection.Close();
                return renderMessages;
            }
            catch (Exception msg)
            {
                Console.WriteLine(msg.ToString());
                throw;
            }
        }


        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
