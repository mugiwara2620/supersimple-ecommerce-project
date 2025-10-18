import dayjs from 'dayjs';
import { formatMoney } from '../../utils/money.js';
import axios from 'axios';
import { DeliveryOptions } from './DeliveryOptions.jsx';


export function OrderSummary({cart,selectedDeliveryOption,deliveryOptions}) {
    function ProductData({ selectedDeliveryOption }) {
        if (selectedDeliveryOption) {
            let y =
                cart.map((product) => {
                    const productData = product.product;
                    return (

                        <div key={product.productId} className="cart-item-container">
                            <div className="delivery-date">
                                Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>

                            <div className="cart-item-details-grid">
                                <img className="product-image"
                                    src={productData.image} />

                                <div className="cart-item-details">
                                    <div className="product-name">
                                        {productData.name}
                                    </div>
                                    <div className="product-price">
                                        {formatMoney(productData.priceCents)}
                                    </div>
                                    <div className="product-quantity">
                                        <span>
                                            Quantity: <span className="quantity-label">{product.quantity}</span>
                                        </span>
                                        <span className="update-quantity-link link-primary">
                                            Update
                                        </span>
                                        <span
                                            className="delete-quantity-link link-primary"
                                            onClick={() => {
                                                axios.delete(`/api/cart-items/:${product.productId}`).then((response) => {
                                                    console.log(response.data);
                                                })
                                            }}>
                                            Delete
                                        </span>
                                    </div>
                                </div>

                                <DeliveryOptions
                                product = {product}
                                deliveryOptions= {deliveryOptions} />
                            </div>
                        </div>

                    )
                })
            return y;
        }
    }

    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                selectedDeliveryOption = deliveryOptions
                    .find((deliveryOption) => {
                        return deliveryOption.id === cartItem.deliveryOptionId;
                    })
            })

            }
            <ProductData
                selectedDeliveryOption={selectedDeliveryOption} />
        </div>
    );
}