using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.DbContextRepository
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        { }

        // Tables
        //public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        //public DbSet<CartItem> CartItems { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Only configure here if options not supplied by DI
            if (!optionsBuilder.IsConfigured)
            {
                const string conn =
                    "server=localhost;database=WPT_PROJ_DATABASE;user=root;password=pass1234";
                optionsBuilder.UseMySql(conn, ServerVersion.AutoDetect(conn));
            }
        }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);

        //    // Make Email unique
        //    modelBuilder.Entity<User>()
        //                .HasIndex(u => u.Email)
        //                .IsUnique();

        //    // Optional: ensure each user has at most one CartItem per product
        //    modelBuilder.Entity<CartItem>()
        //                .HasIndex(ci => new { ci.UserId, ci.ProductId })
        //                .IsUnique();
        //}
    }
}
