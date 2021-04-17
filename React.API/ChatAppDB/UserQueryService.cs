using Microsoft.AspNetCore.Mvc;
using Npgsql;
using System;
using System.Collections.Generic;

namespace React.API.ChatAppDB
{
    public class UserQueryService
    {
        public User QueryUser(string username)
        {
            var dbConnection = new DbConnection();

            var conn = dbConnection.GetConnection();

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
                        Created_At = reader.GetDateTime(3),
                        Password = reader.GetString(4),
                    };

                    return user;
                }
            }

            return null;

        }
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

        public List<User> GetUserAuthentication(string userId)
        {
            var dbConnection = new DbConnection();

            var conn = dbConnection.GetConnection();

            var users = new List<User>();

            using var cmd = new NpgsqlCommand("SELECT * FROM users WHERE user_id = @ui;", conn);

            {
                cmd.Parameters.AddWithValue("ui", userId);
                cmd.ExecuteNonQuery();
            }

            return users;
        }



        public User AuthenticateUser(string username, string password)
        {
            var user = QueryUser(username);

            if (user.Password == password)
            {
                return user;
            }
            else
            {
                throw new Exception("login failed!");
            }
        }
    }
}
