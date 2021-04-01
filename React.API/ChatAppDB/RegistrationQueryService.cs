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

        public List<RegistrationModel> CreateRegistration()
        {
            var dbConnection = new DbConnection();

            var conn = dbConnection.GetConnection();

            var newRegistration = new List<RegistrationModel>();

            using var cmd = new NpgsqlCommand("INSERT INTO users (id, username, email, created_at) VALUES (UserID, Username, Email, NOW());", conn);
            cmd.ExecuteNonQuery();

            return newRegistration;

        }

    }
}
