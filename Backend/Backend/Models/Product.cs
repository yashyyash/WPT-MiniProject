using System.Collections.Generic;

namespace Backend.Models
{
    public class Product
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public decimal Price { get; set; }

        public string Image { get; set; } = string.Empty;     // e.g. "/images/laptop.png"

        public string Category { get; set; } = string.Empty;  // electronic / grocery / home‑decor

        public string Description { get; set; } = string.Empty;

        // Navigation: a product can appear in many cart items
        //public ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();
    }
}
