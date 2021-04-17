using Npgsql;
using React.API.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React.API.ChatAppDB
{
    public class RegistrationQueryService
    {

        public List<RegistrationModel> CreateRegistration(string username, string email, string password)
        {
            var dbConnection = new DbConnection();

            var conn = dbConnection.GetConnection();

            var newRegistration = new List<RegistrationModel>();

            using var cmd = new NpgsqlCommand("INSERT INTO users (username, email, created_at, password) VALUES (@u, @e, NOW(), crypt(@p, gen_salt('bf')));", conn);

            {
                cmd.Parameters.AddWithValue("u", username);
                cmd.Parameters.AddWithValue("e", email);
                cmd.Parameters.AddWithValue("p", password);
                cmd.ExecuteNonQuery();
            }
            

            return newRegistration;

        }

    }
}
