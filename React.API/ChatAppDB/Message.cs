using System;

namespace React.API.ChatAppDB
{
    public class Message
    {
        public Guid Id { get; set; }

        public Guid User_Id { get; set; }
        public string Text { get; set; }
        public DateTime Creadted_At { get; set; }
    }
}