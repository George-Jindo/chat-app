using ChatAppData.Models;
using IdentityServer4.EntityFramework.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Npgsql;

namespace ChatAppData.Models
{
    public class ChatAppContext : DbContext
    {
        public ChatAppContext(DbContextOptions<ChatAppContext> options)
                : base(options)
        {
            var conn = new NpgsqlConnection();
            conn.Open();

            _ = conn;
        }

        public DbSet<Users> Users { get; set; }
        public DbSet<Message> Message { get; set; }
    }
}
