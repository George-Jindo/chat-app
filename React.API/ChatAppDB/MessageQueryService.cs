using Npgsql;
using System.Collections.Generic;

namespace React.API.ChatAppDB
{
    public class MessageQueryService
    {
        public List<Message> QueryMessages()
        {
            var dbConnection = new DbConnection();

            var conn = dbConnection.GetConnection();

            var messages = new List<Message>();

            using var cmd = new NpgsqlCommand("SELECT * FROM message;", conn);

            using (var reader = cmd.ExecuteReader())
            {
                // looping through each row
                while (reader.Read())
                {
                    var message = new Message
                    {
                        Id = reader.GetGuid(0),
                        User_Id = reader.GetGuid(1),
                        Text = reader.GetString(2),
                        Creadted_At = reader.GetDateTime(3)
                    };

                    messages.Add(message);
                }

                return messages;
            }
        }

    }
}
