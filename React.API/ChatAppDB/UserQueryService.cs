using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React.API.ChatAppDB
{
    public class UserQueryService
    {
        public List<User> QueryUsers()
        {
            var dbConnection = new DbConnection();

            var conn = dbConnection.GetConnection();

            var users = new List<User>();

            using var cmd = new NpgsqlCommand("SELECT * FROM users;", conn);

            using (var reader = cmd.ExecuteReader())
            {
                // looping through each row
                while (reader.Read())
                {
                    var user = new User
                    {
                        Id = reader.GetGuid(0),
                        Username = reader.GetString(1),
                        Email = reader.GetString(2),
                        Created_At = reader.GetDateTime(3)
                    };

                    users.Add(user);
                }

                return users;
            }
        }
    }
}
