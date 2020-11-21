using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using Chatterbox.Models;
using Microsoft.AspNetCore.Mvc;
using API.Models;
using Newtonsoft.Json;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {

        [HttpPost]
        public ActionResult<Response> Get()
        {
            return new Response
            {
                IsSuccessful = true,
                UserName = "George",
                Password = "password",
                Id = 1,
                ErrorMessage = "Username not found"
            };
        }
    }

    public class Response
    {
        public bool IsSuccessful { get; set; }
        public int Id { get; set; }

        public string UserName { get; set; }

        public string Password { get; set; }
        public string ErrorMessage { get; set; }
    }
}