import { DeliveryOptions } from './DeliveryOptions.jsx';
import {CartItemDetails} from './CartItemDetails.jsx';
import {DeliveryDate} from './DeliveryDate.jsx';


export function OrderSummary({cart,selectedDeliveryOption,deliveryOptions}) {
    function ProductData({ selectedDeliveryOption }) {
        if (selectedDeliveryOption) {
            let y =
                cart.map((product) => {
                    const productData = product.product;
                    return (

                        <div key={product.productId} className="cart-item-container">
                            <DeliveryDate
                            selectedDeliveryOption={selectedDeliveryOption}
                             />

                            <div className="cart-item-details-grid">
                                <CartItemDetails 
                                productData={productData}
                                product={product}
                                />

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