import { createContext, useEffect, useState } from 'react';
import { productsData } from "../../data";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  // State to manage the list of products
  const [products, setProducts] = useState(productsData);

  // State to manage the cart items
  const [cart, setCart] = useState([]);

  // State to manage the total number of items in the cart
  const [itemAmount, setItemAmount] = useState(0);
  
  // State to manage the total cost of items in the cart
  const [total, setTotal] = useState(0);

   // Add promo codes and discount state
const promoCodes = {
  SAVE10: 0.10, // 10% discount
  SAVE20: 0.20, // 20% discount
};

  const [discount, setDiscount] = useState(0); // To store the current discount

  
  // Effect to calculate the total cost of the cart whenever the cart changes
  useEffect(() => {
    const total = cart.reduce((accum, currentItem) => {
      const priceAsNumber = parseFloat(currentItem.price);
      if (isNaN(priceAsNumber)) {
        return accum;
      }
      return accum + priceAsNumber * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  // Function to add a product to the cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    // Check if the item already exists in the cart
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      // If the item exists, increase its quantity
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      // If the item does not exist, add it to the cart
      setCart([...cart, newItem]);
    }
  };

  // Effect to calculate the total quantity of items in the cart whenever the cart changes
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accum, currentItem) => {
        return accum + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCart([]);
  };

  // Function to increase the quantity of a specific item in the cart
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // Function to decrease the quantity of a specific item in the cart
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      // If the quantity is greater than 1, decrease it
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      // If the quantity is less than 2, remove the item from the cart
      if (cartItem.amount < 2) {
        removeFromCart(id);
      }
    }
  };



 


// Function to apply promo code
const applyPromoCode = (code) => {
  if (promoCodes[code]) {
    setDiscount(promoCodes[code]);
    alert('Promo code applied successfully!');
  } else {
    alert('Invalid promo code.');
  }
};


  return (
    <ShopContext.Provider
      value={{
        products,
        total,
        addToCart,
        cart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        applyPromoCode, 
        discount
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
