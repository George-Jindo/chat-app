using System;
using System.Collections.Generic;
using System.Text;

namespace ChatAppData.Models
{
    public class Users
    {
        public Users()
        {
        }

        public Guid Id { get; private set; }

        public DateTime CreatedOn { get; private set; }

        public string Username { get; set; }
    }

    
}
