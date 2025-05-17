// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { fetchProducts } from "../api/product";
// import { useCart } from "../store/cartContext";

// const ProductList = () => {
//   const { cat } = useParams();
//   const [items, setItems] = useState([]);
//   const { dispatch } = useCart();

//   useEffect(() => {
//     fetchProducts(cat).then(setItems);
//   }, [cat]);

//   return (
//     <div className="grid">
//       {items.map((p) => (
//         <div key={p.id} className="card">
//           <img src={p.image} alt={p.name} />
//           <h4>{p.name}</h4>
//           <p>₹ {p.price}</p>
//           <button onClick={() => dispatch({ type: "ADD", item: p })}>
//             Add to Cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;





import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "../api/product";
import { useCart } from "../store/cartContext";

const ProductList = () => {
  const { cat } = useParams();
  const [items, setItems] = useState([]);
  const { dispatch } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts(cat).then(setItems);
  }, [cat]);

  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
    navigate("/cart"); // redirect so user sees cart immediately
  };

  return (
    <div className="grid">
      {items.map((p) => (
        <div key={p.id} className="card">
          <img src={p.image} alt={p.name} />
          <h4>{p.name}</h4>
          <p>₹ {p.price}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
