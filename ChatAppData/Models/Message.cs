using System;
using System.Collections.Generic;
using System.Text;

namespace ChatAppData.Models
{
    public class Message
    {
        public Message()
        {
        }

        public Guid Id { get; private set; }

        public Guid User_id { get; private set; }

        public DateTime Created_at { get; private set; }

        public string Text { get; set; }
    }


}