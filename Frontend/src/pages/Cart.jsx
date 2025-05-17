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





// import { Link, useNavigate } from "react-router-dom";
// import { useCart } from "../store/cartContext";

// const Cart = () => {
//   const { cart, dispatch } = useCart();
//   const navigate = useNavigate();

//   const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

//   if (cart.length === 0)
//     return (
//       <p>
//         Your cart is empty. <Link to="/products">Go to products</Link>
//       </p>
//     );

//   return (
//     <section>
//       <h2>Cart</h2>
//       {cart.map((item) => (
//         <div key={item.id} className="cart-item">
//           {item.name} – ₹{item.price} × {item.qty}
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



import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/authContext';

const Cart = () => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const userId = user?.userID;

    if (!userId) {
      console.warn("User not logged in");
      return;
    }

    fetch(`https://localhost:7069/api/Cart/${userId}`)
      .then((res) => res.json())
      .then((data) => setCartItems(data))
      .catch((err) => console.error("Failed to fetch cart items:", err));
  }, [user]);

  if (!user) {
    return <p>Please log in to view your cart.</p>;
  }

  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.cartItemID}>
            <img
              src={item.product.imageURL}
              alt={item.product.name}
              style={{ maxWidth: '150px' }}
            />
            <h3>{item.product.name}</h3>
            <p>Price: ${item.product.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${(item.quantity * item.product.price).toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
