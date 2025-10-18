import dayjs from 'dayjs';
import axios from 'axios';
import './Orders.css'
import {useState, useEffect} from 'react';
import { Header } from '../components/Header';
import { formatMoney } from '../utils/money';





export function Orders({ cart }) {
  const [orders, setOrders] = useState([]);
  useEffect(()=>{
  axios.get('/api/orders?expand=products')
      .then((response) => {
        setOrders(response.data);
        
      })},[])
//   let orders= [
//     {
//         "id": "81d528fc-01ba-47f1-886e-0d79e4b040bc",
//         "orderTimeMs": 1760785052528,
//         "totalCostCents": 1199,
//         "products": [
//             {
//                 "productId": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//                 "quantity": 1,
//                 "estimatedDeliveryTimeMs": 1761389852528,
//                 "product": {
//                     "keywords": [
//                         "socks",
//                         "sports",
//                         "apparel"
//                     ],
//                     "id": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//                     "image": "images/products/athletic-cotton-socks-6-pairs.jpg",
//                     "name": "Black and Gray Athletic Cotton Socks - 6 Pairs",
//                     "rating": {
//                         "stars": 4.5,
//                         "count": 87
//                     },
//                     "priceCents": 1090,
//                     "createdAt": "2025-10-11T05:38:23.362Z",
//                     "updatedAt": "2025-10-11T05:38:23.362Z"
//                 }
//             }
//         ],
//         "createdAt": "2025-10-18T10:57:32.528Z",
//         "updatedAt": "2025-10-18T10:57:32.528Z"
//     },
//     {
//         "id": "6d688539-576b-4827-b6cf-e4f90d3d6861",
//         "orderTimeMs": 1760784699931,
//         "totalCostCents": 9954,
//         "products": [
//             {
//                 "productId": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//                 "quantity": 4,
//                 "estimatedDeliveryTimeMs": 1761389499930,
//                 "product": {
//                     "keywords": [
//                         "socks",
//                         "sports",
//                         "apparel"
//                     ],
//                     "id": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//                     "image": "images/products/athletic-cotton-socks-6-pairs.jpg",
//                     "name": "Black and Gray Athletic Cotton Socks - 6 Pairs",
//                     "rating": {
//                         "stars": 4.5,
//                         "count": 87
//                     },
//                     "priceCents": 1090,
//                     "createdAt": "2025-10-11T05:38:23.362Z",
//                     "updatedAt": "2025-10-11T05:38:23.362Z"
//                 }
//             },
//             {
//                 "productId": "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//                 "quantity": 2,
//                 "estimatedDeliveryTimeMs": 1761043899930,
//                 "product": {
//                     "keywords": [
//                         "sports",
//                         "basketballs"
//                     ],
//                     "id": "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//                     "image": "images/products/intermediate-composite-basketball.jpg",
//                     "name": "Intermediate Size Basketball",
//                     "rating": {
//                         "stars": 4,
//                         "count": 127
//                     },
//                     "priceCents": 2095,
//                     "createdAt": "2025-10-11T05:38:23.363Z",
//                     "updatedAt": "2025-10-11T05:38:23.363Z"
//                 }
//             }
//         ],
//         "createdAt": "2025-10-18T10:51:39.932Z",
//         "updatedAt": "2025-10-18T10:51:39.932Z"
//     },
//     {
//         "id": "27cba69d-4c3d-4098-b42d-ac7fa62b7664",
//         "orderTimeMs": 1723456800000,
//         "totalCostCents": 3506,
//         "products": [
//             {
//                 "productId": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//                 "quantity": 1,
//                 "estimatedDeliveryTimeMs": 1723716000000,
//                 "product": {
//                     "keywords": [
//                         "socks",
//                         "sports",
//                         "apparel"
//                     ],
//                     "id": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//                     "image": "images/products/athletic-cotton-socks-6-pairs.jpg",
//                     "name": "Black and Gray Athletic Cotton Socks - 6 Pairs",
//                     "rating": {
//                         "stars": 4.5,
//                         "count": 87
//                     },
//                     "priceCents": 1090,
//                     "createdAt": "2025-10-11T05:38:23.362Z",
//                     "updatedAt": "2025-10-11T05:38:23.362Z"
//                 }
//             },
//             {
//                 "productId": "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
//                 "quantity": 2,
//                 "estimatedDeliveryTimeMs": 1723456800000,
//                 "product": {
//                     "keywords": [
//                         "tshirts",
//                         "apparel",
//                         "mens"
//                     ],
//                     "id": "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
//                     "image": "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//                     "name": "Adults Plain Cotton T-Shirt - 2 Pack",
//                     "rating": {
//                         "stars": 4.5,
//                         "count": 56
//                     },
//                     "priceCents": 799,
//                     "createdAt": "2025-10-11T05:38:23.364Z",
//                     "updatedAt": "2025-10-11T05:38:23.364Z"
//                 }
//             }
//         ],
//         "createdAt": "2025-10-11T05:38:23.362Z",
//         "updatedAt": "2025-10-11T05:38:23.362Z"
//     },
//     {
//         "id": "b6b6c212-d30e-4d4a-805d-90b52ce6b37d",
//         "orderTimeMs": 1718013600000,
//         "totalCostCents": 4190,
//         "products": [
//             {
//                 "productId": "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//                 "quantity": 2,
//                 "estimatedDeliveryTimeMs": 1718618400000,
//                 "product": {
//                     "keywords": [
//                         "sports",
//                         "basketballs"
//                     ],
//                     "id": "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//                     "image": "images/products/intermediate-composite-basketball.jpg",
//                     "name": "Intermediate Size Basketball",
//                     "rating": {
//                         "stars": 4,
//                         "count": 127
//                     },
//                     "priceCents": 2095,
//                     "createdAt": "2025-10-11T05:38:23.363Z",
//                     "updatedAt": "2025-10-11T05:38:23.363Z"
//                 }
//             }
//         ],
//         "createdAt": "2025-10-11T05:38:23.363Z",
//         "updatedAt": "2025-10-11T05:38:23.363Z"
//     }
// ];
  function Order({ order }) {
    console.log(orders);

    console.log(order);
    const products = order.products;
    console.log(products);
    const productsOrder=products.map((productsOrder) => {
      const product = productsOrder.product;
      return (
            <div className="order-details-grid">
              <div className="product-image-container">
                <img src={product.image} />
              </div>

              <div className="product-details">
                <div className="product-name">
                  {product.name}
                </div>
                <div className="product-delivery-date">
                  Arriving on: {dayjs(productsOrder.estimatedDeliveyTimeMs).format('MMMM d')}
                </div>
                <div className="product-quantity">
                  Quantity: {productsOrder.quantity}
                </div>
                <button className="buy-again-button button-primary">
                  <img className="buy-again-icon" src="images/icons/buy-again.png" />
                  <span className="buy-again-message">Add to Cart</span>
                </button>
              </div>

              <div className="product-actions">
                <a href="/tracking">
                  <button className="track-package-button button-secondary">
                    Track package
                  </button>
                </a>
              </div>
            </div>
      )
    
    });
    console.log(productsOrder);
    return(
      <div className="order-container">
        <div className="order-header">
              <div className="order-header-left-section">
                <div className="order-date">
                  <div className="order-header-label">Order Placed:</div>
                  <div>{dayjs(order.orderTimeMs).format('MMMM d')}</div>
                </div>
                <div className="order-total">
                  <div className="order-header-label">Total:</div>
                  <div>{formatMoney(order.totalCostCents)}</div>
                </div>
              </div>

              <div className="order-header-right-section">
                <div className="order-header-label">Order ID:</div>
                <div>{order.id}</div>
              </div>
            </div>
            {productsOrder}
      </div>
    )



  }
 

  // useEffect(() => {
  //   setCartArray([cartArray, cart]);
  //   console.log(cartArray);
  // }, [])
  
  function OrdersProducts(){
    
    return(orders.map((order)=>{
            return(<Order order={order} />)

          }))
        }
  

  return (

    <>
      <link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />
      <title>Orders</title>
      <Header
        cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
           
          <OrdersProducts />
          
          
        </div>
      </div>
    </>
  )

}