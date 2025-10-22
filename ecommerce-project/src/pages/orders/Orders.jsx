import axios from 'axios';
import './Orders.css'
import {useState, useEffect} from 'react';
import { Header } from '../../components/Header';
import {OrdersProducts} from './OrdersProducts';

export function Orders({ cart,loadCartData }) {
   const [orders, setOrders] = useState([]);
    useEffect(()=>{
      const getOrdersData=async ()=>{
        const response = await axios.get('/api/orders?expand=products');
        setOrders(response.data); };
      getOrdersData();
      },[]);
  
  return (

    <>
      <link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />
      <title>Orders</title>
      <Header
        cart={cart}
         />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
           
          <OrdersProducts
          loadCartData={loadCartData}
          orders={orders} />
          
          
        </div>
      </div>
    </>
  )

}