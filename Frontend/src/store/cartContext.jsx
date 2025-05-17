import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const exist = state.find((p) => p.id === action.item.id);
      if (exist) {
        // Increase quantity for existing item
        return state.map((p) =>
          p.id === action.item.id ? { ...p, qty: p.qty + 1 } : p
        );
      } else {
        // Add new item with qty 1
        return [...state, { ...action.item, qty: 1 }];
      }
    }
    case "REMOVE":
      return state.filter((p) => p.id !== action.id);
    case "RESET":
      return [];
    default:
      return state;
  }
};


export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
