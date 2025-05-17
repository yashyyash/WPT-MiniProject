namespace Backend.Models
{
    public class Product
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public decimal Price { get; set; }

        public string Image { get; set; } = string.Empty; // renamed from ImageUrl

        public string Category { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty; // new property

        // Navigation: A product can be in many cart items
        public ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();
    }
}
