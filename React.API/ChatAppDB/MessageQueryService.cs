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

        public List<Message> CreateMessages(string text)
        {
            var dbConnection = new DbConnection();

            var conn = dbConnection.GetConnection();

            var messages = new List<Message>();

            using var cmd = new NpgsqlCommand("INSERT INTO message (text, created_at) VALUES (@t, NOW());", conn);
            {
                cmd.Parameters.AddWithValue("t", text);
                cmd.ExecuteNonQuery();
            }

            return messages;

        }

    }
}
