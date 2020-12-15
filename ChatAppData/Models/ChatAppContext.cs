using ChatAppData.Models.ModelConfigurations;
using IdentityServer4.EntityFramework.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace ChatAppData.Models
{
    public class ChatAppContext : DbContext
    {
        public ChatAppContext(DbContextOptions<ChatAppContext> options)
                : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new UserConfiguration());
            builder.ApplyConfiguration(new MessageConfiguration());
        }

        public DbSet<Users> Users { get; set; }
        public DbSet<Messages> Messages { get; set; }
    }
}
