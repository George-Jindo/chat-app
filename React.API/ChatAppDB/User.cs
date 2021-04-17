using System;

namespace React.API.ChatAppDB
{
    public class User
    {
        public Guid Id { get; set; }
        public string Username { get; set; }

        public string Password { get; set; }
        public string Email { get; set; }
        public DateTime Created_At { get; set; }
    }
}