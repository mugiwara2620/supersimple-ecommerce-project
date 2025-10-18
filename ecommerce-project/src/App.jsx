import {HomePage} from './pages/home/HomePage';
import {Checkout} from './pages/checkout/CheckoutPage';
import {useState,useEffect} from 'react';
import {Orders} from './pages/orders/Orders'
import axios from 'axios';
import { Tracking} from './pages/TrackingPage'
import {NotFound} from './pages/404Page'; 
 import { Routes ,Route} from 'react-router';
import './App.css'

function App() {
  
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  //  const [orders, setOrders] = useState([]);
  // useEffect(()=>{
  // axios.get('/api/orders?expand=products')
  //     .then((response) => {
  //       setOrders(response.data);
        
  //     })},[])



  useEffect(() => {
    console.log('useEffect returned')
    
		const getHomePage= async ()=>{
        const response = await axios.get('/api/products');
      	setProducts(response.data);
    };
    getHomePage();

			
			

			
		const fetchAppData = async()=>{ 
      const response= await axios.get('/api/cart-items?expand=product');
			setCart(response.data);
       
			};
    fetchAppData();
    
			

	}, [ ]);



  return (
    <Routes>
      <Route 
        index
        element={
        <HomePage
        cart={cart}
        setCart={setCart}
        products={products}
       
         />
        } />
        
      <Route 
       path='checkout'
       element={<Checkout 
       cart={cart}
       setCart={setCart}
       products={products}
       
        />}
      />
      <Route 
       path='orders'
       element={
       <Orders
         cart={cart}
         />}
      />
      <Route 
       path='tracking'
       element={<Tracking />}
      />
      <Route
       path='*'
       element={<NotFound />}
      />
    </Routes>
  )
}

export default App
