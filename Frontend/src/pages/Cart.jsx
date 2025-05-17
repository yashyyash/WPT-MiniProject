// import { Link, useNavigate } from "react-router-dom";
// import { useCart } from "../store/cartContext";

// const Cart = () => {
//   const { cart, dispatch } = useCart();
//   const navigate = useNavigate();

//   const total = cart.reduce((sum, item) => sum + item.price, 0);

//   if (cart.length === 0) return <p>Your cart is empty.</p>;

//   return (
//     <section>
//       <h2>Cart</h2>
//       {cart.map((item) => (
//         <div key={item.id} className="cart-item">
//           {item.name} – ₹{item.price}
//           <button onClick={() => dispatch({ type: "REMOVE", id: item.id })}>
//             Remove
//           </button>
//         </div>
//       ))}
//       <h3>Total: ₹{total}</h3>
//       <button onClick={() => navigate("/checkout")}>Checkout</button>
//     </section>
//   );
// };

// export default Cart;





import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../store/cartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0)
    return (
      <p>
        Your cart is empty. <Link to="/products">Go to products</Link>
      </p>
    );

  return (
    <section>
      <h2>Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          {item.name} – ₹{item.price} × {item.qty}
          <button onClick={() => dispatch({ type: "REMOVE", id: item.id })}>
            Remove
          </button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
      <button onClick={() => navigate("/checkout")}>Checkout</button>
    </section>
  );
};

export default Cart;
