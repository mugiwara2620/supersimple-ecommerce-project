import './TrackingPage.css'
import { useEffect, useState } from 'react';
import { Header } from '../components/Header'
import { Link } from 'react-router'
import { useParams } from 'react-router';
import axios from 'axios';
import dayjs from 'dayjs';
export function Tracking({ cart }) {

  const { orderId, productId } = useParams();
  const [order, setOrder] = useState();
  

  useEffect(() => {
    const getTrackingData = async () => {
      const response = await axios.get(`/api/orders/${orderId}?expand=products`);
      console.log(response.data);
      setOrder(response.data);
    }
    getTrackingData();

  }, []);
  if (order) {

    const selectedOrder = order.products.find((product) => product.productId === productId);
    const selectedProduct = selectedOrder.product;

    const totalDeliveryTimeMs = selectedOrder.estimatedDeliveryTimeMs -order.orderTimeMs  ;
    const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
    const deliveryCss = (timePassedMs/totalDeliveryTimeMs)*100;
    const deliveryCssPercentage = (deliveryCss>100) ? 100 : deliveryCss;
    console.log(deliveryCssPercentage);
    console.log( (deliveryCssPercentage >80) ? {color:'green'} : 'hello');
    const isPreparing = deliveryCssPercentage<33;
    const isShipping = (deliveryCssPercentage<66 && deliveryCssPercentage>=33);
    const isDelivering = (deliveryCssPercentage<=100 && deliveryCssPercentage>=66);
    


    return (
      <>
        <link rel="icon" type="image/svg+xml" href="/tracking-favicon.png" />
        <title>Tracking</title>
        <Header
          cart={cart}
        />
        <div className="tracking-page">
          <div className="order-tracking">
            <Link className="back-to-orders-link link-primary" href="/orders">
              View all orders
            </Link>

            <div className="delivery-date">
              {(deliveryCssPercentage >= 100) ? 'Delivered on'  : 'Arriving on '} Monday, {dayjs(selectedOrder.estimatedDeliveyTimeMs).format('MMM D')}
            </div>

            <div className="product-info">
              {selectedProduct.name}
            </div>

            <div className="product-info">
              Quantity: {selectedOrder.quantity}
            </div>

            <img className="product-image" src={selectedProduct.image} />

            <div className="progress-labels-container">
              <div 
              className="progress-label preparing"
              
              style={ (isPreparing) ? {color:'green'} : {color:'black'}}
              >
                
                Preparing
              </div>
              <div 
              className="progress-label current-status"
              style={ (isShipping) ? {color:'green'} : {color:'black'}}

              >
                Shipped
              </div>
              <div 
              className="progress-label"
              style={ (isDelivering) ? {color:'green'} : {color:'black'} }
              >
                Delivered
              </div>
            </div>

            <div className="progress-bar-container">
              <div 
              className="progress-bar"
              style={{width:`${deliveryCssPercentage}%`}}
              ></div>
            </div>
          </div>
        </div>
      </>
    )
  }
}