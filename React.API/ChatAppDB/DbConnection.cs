using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React.API.ChatAppDB
{
    public class DbConnection
    {
        public NpgsqlConnection GetConnection()
        {
            var connString = "Host=localhost;Username=gjindo;Password=CamaroZ28;Database=Chatapp";

            using var conn = new NpgsqlConnection(connString);
            conn.Open();

            return conn;
        }
    }
}
