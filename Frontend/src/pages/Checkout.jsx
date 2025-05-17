import { useCart } from "../store/cartContext";

const Checkout = () => {
  const { cart, dispatch } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleConfirm = () => {
    alert("Purchase confirmed!");
    dispatch({ type: "RESET" });
  };

  return (
    <section>
      <h2>Checkout</h2>
      {cart.map((item) => (
        <p key={item.id}>
          {item.name} – ₹{item.price}
        </p>
      ))}
      <h3>Total: ₹{total}</h3>
      <button onClick={handleConfirm}>Confirm Purchase</button>
    </section>
  );
};

export default Checkout;
