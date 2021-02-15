using Npgsql;
using System;
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

            using var cmd = new NpgsqlCommand("SELECT * FROM message INNER JOIN users ON users.id = message.user_id;", conn);

            using (var reader = cmd.ExecuteReader())
            {
                // looping through each row
                while (reader.Read())
                {
                    var message = new Message
                    {
                        Id = reader.GetGuid(0),
                        UserId = reader.GetGuid(1),
                        Text = reader.GetString(2),
                        CreatedAt = reader.GetDateTime(3)
                    };

                    messages.Add(message);
                }

                return messages;
            }
        }

        public List<Message> CreateMessages()
        {
            var dbConnection = new DbConnection();

            var conn = dbConnection.GetConnection();

            var messages = new List<Message>();

            using var cmd = new NpgsqlCommand("INSERT INTO message (user_id, text, created_at) VALUES ('21735cff-8f33-4c1b-a24d-74b3e544375d', 'It is going just fine, thanks', NOW());", conn);
            cmd.ExecuteNonQuery();

            return messages;

        }

    }
}
