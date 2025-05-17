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





// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { fetchProducts } from "../api/product";
// import { useCart } from "../store/cartContext";

// const ProductList = () => {
//   const { cat } = useParams();
//   const [items, setItems] = useState([]);
//   const { dispatch } = useCart();
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProducts(cat).then(setItems);
//   }, [cat]);

//   const addToCart = (item) => {
//     dispatch({ type: "ADD", item });
//     navigate("/cart"); // redirect so user sees cart immediately
//   };

//   return (
//     <div className="grid">
//       {items.map((p) => (
//         <div key={p.id} className="card">
//           <img src={p.image} alt={p.name} />
//           <h4>{p.name}</h4>
//           <p>₹ {p.price}</p>
//           <button onClick={() => addToCart(p)}>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;


// import React, { useEffect, useState } from 'react';

// const ProductList = () => {
//   // State to hold the list of products
//   const [products, setProducts] = useState([]);

//   // Effect hook to fetch data when the component mounts
//   useEffect(() => {
//     fetch('https://localhost:7069/api/Products')
//       .then(response => response.json())
//       .then(data => {
//         setProducts(data);
//       })
//       .catch(error => console.error('Error fetching products:', error));
//   }, []); // Empty dependency array means this effect runs only once after the initial render

//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {products.map(product => (
//           <li key={product.productID}>
//             <img src={product.imageURL} alt={product.name} style={{ maxWidth: '200px' }} />
//             <h3>{product.name}</h3>
//             <p>${product.price}</p>
//             <p>{product.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;



// import React, { useEffect, useState } from 'react';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('https://localhost:7069/api/Products')
//       .then(response => response.json())
//       .then(data => {
//         setProducts(data);
//       })
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   const addToCart = (productId) => {
//     fetch(`https://localhost:7069/api/Cart/add?userId=1&productId=${productId}&quantity=1`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(response => response.text())
//     .then(result => console.log('Item added to cart:', result))
//     .catch(error => console.error('Error adding item to cart:', error));
//   };

//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {products.map(product => (
//           <li key={product.productID}>
//             <img src={product.imageURL} alt={product.name} style={{ maxWidth: '200px' }} />
//             <h3>{product.name}</h3>
//             <p>${product.price}</p>
//             <p>{product.description}</p>
//             <button onClick={() => addToCart(product.productID)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;



// import React, { useEffect, useState } from 'react';

// const ProductList = ({ userId }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('https://localhost:7069/api/Products')
//       .then(response => response.json())
//       .then(data => {
//         setProducts(data);
//       })
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   const addToCart = (productId) => {
//     fetch(`https://localhost:7069/api/Cart/add?userId=${userId}&productId=${productId}&quantity=3`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(response => response.text())
//     .then(result => console.log('Item added to cart:', result))
//     .catch(error => console.error('Error adding item to cart:', error));
//   };

//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {products.map(product => (
//           <li key={product.productID}>
//             <img src={product.imageURL} alt={product.name} style={{ maxWidth: '200px' }} />
//             <h3>{product.name}</h3>
//             <p>${product.price}</p>
//             <p>{product.description}</p>
//             <button onClick={() => addToCart(product.productID)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;

// import React, { useEffect, useState } from 'react';

// const ProductList = ({ userId }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('https://localhost:7069/api/Products')
//       .then(response => response.json())
//       .then(data => {
//         setProducts(data);
//       })
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   const addToCart = (productId) => {
//     if (!userId) {
//       alert('User not logged in');
//       return;
//     }

//     fetch(`https://localhost:7069/api/Cart/add?userId=${userId}&productId=${productId}&quantity=3`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(response => response.text())
//       .then(result => console.log('Item added to cart:', result))
//       .catch(error => console.error('Error adding item to cart:', error));
//   };

//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {products.map(product => (
//           <li key={product.productID}>
//             <img src={product.imageURL} alt={product.name} style={{ maxWidth: '200px' }} />
//             <h3>{product.name}</h3>
//             <p>${product.price}</p>
//             <p>{product.description}</p>
//             <button onClick={() => addToCart(product.productID)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;


import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/authContext'; // ✅ your existing context

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { user } = useAuth(); // ✅ get user from context

  useEffect(() => {
    fetch('https://localhost:7069/api/Products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (productId) => {
    const userId = user?.userID; // ✅ get userID from decoded token

    if (!userId) {
      alert("User not logged in");
      return;
    }

    fetch(`https://localhost:7069/api/Cart/add?userId=${userId}&productId=${productId}&quantity=3`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.text())
      .then(result => console.log('Item added to cart:', result))
      .catch(error => console.error('Error adding item to cart:', error));
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.productID}>
            <img src={product.imageURL} alt={product.name} style={{ maxWidth: '200px' }} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product.productID)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
