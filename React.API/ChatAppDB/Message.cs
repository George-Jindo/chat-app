using System;

namespace React.API.ChatAppDB
{
    public class Message
    {
        public Guid Id { get; set; }

        public Guid UserId { get; set; }
        public string Text { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}