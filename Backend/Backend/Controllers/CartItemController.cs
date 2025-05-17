//using Backend.DbContextRepository;
//using Backend.Models;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;

//namespace Backend.Controllers
//{
//    [ApiController]
//    [Route("api/[controller]")]
//    public class CartItemController : ControllerBase
//    {
//        private readonly AppDbContext _context;

//        public CartItemController(AppDbContext context)
//        {
//            _context = context;
//        }

//        [HttpGet]
//        public async Task<ActionResult<IEnumerable<CartItem>>> GetAll()
//        {
//            return await _context.CartItems
//                .Include(c => c.Product)
//                .Include(c => c.User)
//                .ToListAsync();
//        }

//        [HttpGet("{id}")]
//        public async Task<ActionResult<CartItem>> GetById(int id)
//        {
//            var cartItem = await _context.CartItems
//                .Include(c => c.Product)
//                .Include(c => c.User)
//                .FirstOrDefaultAsync(c => c.UserId == id);

//            if (cartItem == null) return NotFound();
//            return cartItem;
//        }

//        [HttpPost]
//        public async Task<ActionResult<CartItem>> Create(CartItem item)
//        {
//            _context.CartItems.Add(item);
//            await _context.SaveChangesAsync();
//            return CreatedAtAction(nameof(GetById), new { id = item.UserId }, item);
//        }

//        [HttpPut("{id}")]
//        public async Task<IActionResult> Update(int id, CartItem item)
//        {
//            if (id != item.UserId) return BadRequest();

//            _context.Entry(item).State = EntityState.Modified;
//            await _context.SaveChangesAsync();
//            return NoContent();
//        }

//        [HttpDelete("{id}")]
//        public async Task<IActionResult> Delete(int id)
//        {
//            var item = await _context.CartItems.FindAsync(id);
//            if (item == null) return NotFound();

//            _context.CartItems.Remove(item);
//            await _context.SaveChangesAsync();
//            return NoContent();
//        }
//    }
//}
