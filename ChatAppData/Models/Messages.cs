using System;
using System.Collections.Generic;
using System.Text;

namespace ChatAppData.Models
{
    public class Messages
    {
        public Messages()
        {
        }

        public Guid Id { get; private set; }

        public DateTime CreatedOn { get; private set; }

        public string Text { get; set; }
    }


}