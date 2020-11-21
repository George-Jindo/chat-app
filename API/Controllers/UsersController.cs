using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        // Creating a list of Users
        List<User> users = new List<User>();

        public UsersController()
        {
            users.Add(new User { Email = "g.jindo@gmail.com", Name = "GeorgeJ", Password = "test123", Id = 1 });
            users.Add(new User { Email = "Fancypants@email.com", Name = "FancyP", Password = "test123", Id = 2 });
            users.Add(new User { Email = "ElonMusk@Fakeemail.com", Name = "ElonDaMusk", Password = "Password1234", Id = 3 });

        }
        // GET: api/Users
        [HttpGet]
        public List<User> Get()
        {
            return users;
        }

        // GET: api/Users/5
        [HttpGet("{id}", Name = "Get")]
        public User Get(int id)
        {
            return users.Where(x => x.Id == id).FirstOrDefault();
        }

        // POST: api/Users
        [HttpPost]
        public void Post(User val)
        {
            users.Add(val);
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
