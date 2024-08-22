import React from "react";

function Cart({ cart, handleRemoveFromCart }) {
  const cartItems = cart.map((item) => (
    <div key={item.id} className="flex items-center border-b border-gray-300 py-2">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
      <div className="flex-1">
        <h3 className="text-lg font-medium">{item.name}</h3>
        <p>Quantity: {item.quantity}</p>
        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <button
        onClick={() => handleRemoveFromCart(item.id)}
        className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded-md"
      >
        Remove
      </button>
    </div>
  ));

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 bg-gray-100 max-w-xs w-full">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems}
          <h3 className="text-lg font-bold mt-4">
            Total: ${totalAmount.toFixed(2)}
          </h3>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
