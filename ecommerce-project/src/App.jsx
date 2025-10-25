import {HomePage} from './pages/home/HomePage';
import {Checkout} from './pages/checkout/CheckoutPage';
import {useState} from 'react';
import {Orders} from './pages/orders/Orders'
import axios from 'axios';
import { Tracking} from './pages/TrackingPage';
import {NotFound} from './pages/404Page'; 
import { Routes ,Route} from 'react-router';
import './App.css'

window.axios=axios;

function App() {
  const [cart, setCart] = useState([]);
  //  const [orders, setOrders] = useState([]);
  // useEffect(()=>{
  // axios.get('/api/orders?expand=products')
  //     .then((response) => {
  //       setOrders(response.data);
        
  //     })},[])
  const loadCartData = async()=>{ 
      const response= await axios.get('/api/cart-items?expand=product');
			setCart(response.data);
       
			};




  return (
    <Routes>
      <Route 
        index
        element={
        <HomePage
        cart={cart}
        loadCartData={loadCartData}
       
         />
        } />
        
      <Route 
       path='checkout'
       element={<Checkout 
       cart={cart}
       loadCartData={loadCartData}
       />}
      />
      <Route 
       path='orders'
       element={
       <Orders
         cart={cart}
         loadCartData={loadCartData}
         />}
      />
      <Route 
       path='tracking/:orderId/:productId'
       element={
       <Tracking
        cart={cart}
       />}
      />
      <Route
       path='*'
       element={<NotFound 
       cart={cart}
       />}
      />
    </Routes>
  )
}

export default App
