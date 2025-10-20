import { DeliveryOptions } from './DeliveryOptions.jsx';
import {CartItemDetails} from './CartItemDetails.jsx';
import {DeliveryDate} from './DeliveryDate.jsx';
import dayjs from 'dayjs';


export function OrderSummary({cart,selectedDeliveryOption,deliveryOptions,fetchCheckoutData,loadCartData}) {
    function ProductData({ selectedDeliveryOption }) {
        if (selectedDeliveryOption) {
            let y =
                cart.map((product) => {
                    const productData = product.product;
                    console.log(dayjs(product.deliveryOptionId).format('dddd, MMMM D'))
                    return (

                        <div key={product.productId} className="cart-item-container">
                            <DeliveryDate
                            selectedDeliveryOption={product.deliveryOptionId}
                             />

                            <div className="cart-item-details-grid">
                                <CartItemDetails 
                                productData={productData}
                                product={product}
                                loadCartData={loadCartData}
                                />

                                <DeliveryOptions
                                product = {product}
                                cart={cart}
                                deliveryOptions= {deliveryOptions}
                                fetchCheckoutData={fetchCheckoutData}
                                loadCartData={loadCartData} />
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