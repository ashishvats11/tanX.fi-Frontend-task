import React from 'react';
import { useCart } from '../context/CartProvider';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();

  const placeOrder = () => {
    // Placeholder for order placement logic
    console.log('Placing order: ', cartItems);
    clearCart(); // Clear the cart after placing the order
    // Navigate to a success page or show a success message
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div>
            {cartItems.map((item) => (
              <div key={item.id}>
                <h3>{item.name}</h3>
                <p>
                  Price: ${item.price} x {item.quantity}
                </p>
              </div>
            ))}
          </div>
          <div>
            <h3>Total: ${calculateTotal()}</h3>
            <button onClick={placeOrder}>Place Order</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
