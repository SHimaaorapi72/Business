import React from 'react';

const Cart = ({ cart , handleRemoveFromCart}) => {
    
  return (
    <div className="container mx-auto flex flex-col justify-center items-center mt-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300">The cart is empty.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cart.map((item, index) => (
            <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="p-8 rounded-t-lg" src={item.image} alt="product image" />
              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pb-5">{item.name}</h5>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{item.price}</span>
                  <button className="text-red-600 hover:text-red-800" onClick={() => handleRemoveFromCart(index)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;