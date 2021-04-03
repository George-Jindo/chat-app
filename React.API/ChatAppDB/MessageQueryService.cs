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

        public List<Message> CreateMessages(Guid userId, string text)
        {
            var dbConnection = new DbConnection();

            var conn = dbConnection.GetConnection();

            var messages = new List<Message>();

            using var cmd = new NpgsqlCommand("INSERT INTO message (user_id, text, created_at) VALUES (@ui, @t, NOW());", conn);
            {
                cmd.Parameters.AddWithValue("t", text);
                cmd.Parameters.AddWithValue("ui", userId);
                cmd.ExecuteNonQuery();
            }

            return messages;

        }

    }
}
