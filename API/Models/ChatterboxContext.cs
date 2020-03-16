using Microsoft.EntityFrameworkCore;

namespace Chatterbox.Models
{
    public class ChatterboxContext : DbContext
    {
        public ChatterboxContext(DbContextOptions<ChatterboxContext> options) : base(options) { }

        public DbSet<Message> Messages { get; set; }
    }
}