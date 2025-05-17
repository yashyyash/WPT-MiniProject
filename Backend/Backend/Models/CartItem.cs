namespace Backend.Models
{
    public class CartItem
    {
        public int UserId { get; set; }
        public required User User { get; set; }

        public int ProductId { get; set; }
        public required Product Product { get; set; }

        public int Quantity { get; set; }

    }
}
