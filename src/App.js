import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/generic/Home/layout/Layout';
import Home from './components/generic/Home/Home';
import Cart from './components/cart/Cart';
import { useEffect, useState } from 'react';
import HomeCards from './components/Cards/HomeCards';
import Notification from './components/Notification/Notification';
import Antique from './components/Antique/Antique';




function App() {
 
  const [cart, setCart] = useState([]);
  

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart items to localStorage whenever the cart state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
   

    
  };
  

  const handleRemoveFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  const router = createBrowserRouter([
    {path:'' , element:<Layout/> , children:[
      // {path:'clothes' , element:<Antique addToCart={addToCart}/>},
      // {path:'antique' , element:<Antique addToCart={addToCart}/>},
      {path:'', element:<HomeCards addToCart={addToCart}/> },
      {path:'cart' , element:<Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}/>},
    ]}
  ])
  return (
    <div className="App">
      
        <RouterProvider router={router}>
        </RouterProvider>
  
    </div>
  );
}

export default App;
