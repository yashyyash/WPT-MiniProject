// import { Link } from "react-router-dom";
// import { useAuth } from "../store/authContext";

// const Header = () => {
//   const { token, logout } = useAuth();

//   return (
//     <header className="nav">
//       <Link to="/">Home</Link>
//       {token ? (
//         <>
//           <Link to="/products">List Product</Link>
//           <Link to="/cart">Cart</Link>
//           <button onClick={logout} className="logout-btn">Logout</button>
//         </>
//       ) : (
//         <Link to="/login">Login</Link>
//       )}
//       <Link to="/contact">ContactUs</Link>
//     </header>
//   );
// };

// export default Header;




import { Link } from "react-router-dom";
import { useAuth } from "../store/authContext";
import { useCart } from "../store/cartContext";

const Header = () => {
  const { token, logout } = useAuth();
  const { cart } = useCart();

  // total quantity in cart
  const itemCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <header className="nav">
      <Link to="/">Home | </Link>

      {token ? (
        <>
          <Link to="/products">List Product | </Link> 
          <Link to="/cart">Cart ({itemCount}) | </Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login"> | Login | </Link>
      )}

      <Link to="/contact"> | ContactUs | </Link>
    </header>
  );
};

export default Header;
