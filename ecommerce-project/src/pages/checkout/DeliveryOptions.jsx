import dayjs from 'dayjs';
import {  useState } from 'react';
import axios from 'axios';
export function DeliveryOptions({ deliveryOptions, product, loadCartData }) {
    const [inputSelected, setInputSelected] = useState(product.deliveryOptionId);

    function DeliveryOption({ deliveryOption }) {
        

        return (

            <div
                className="delivery-option"
                onClick={async () => {
                    await axios.put(`/api/cart-items/${product.productId}`,
                        {
                            quantity: product.quantity,
                            deliveryOptionId: deliveryOption.id
                        },
                    );
                    loadCartData();
                }

                }>
                <input
                    value={inputSelected}
                    onChange={(event) => {
                        console.log(event.target.value)
                        setInputSelected(deliveryOption.id);
                        
                    }}

                    type="radio"
                    checked={deliveryOption.id === inputSelected}
                    className="delivery-option-input{ productData.name}"
                    name={`deliver-option-${product.id}`}

                />
                <div>
                    <div className="delivery-option-date">
                        {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}

                    </div>
                    <div className="delivery-option-price">
                        {deliveryOption.id == 1 && ' FREE Shipping'}
                        {deliveryOption.id == 2 && '$4.99 - Shipping'}
                        {deliveryOption.id == 3 && '$9.99 - Shipping'}
                    </div>
                </div>
            </div>
        )

    }


    return (
        <div className="delivery-options" >
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((deliveryOption) => {
                return (
                    <DeliveryOption
                        key={deliveryOption.id}
                        deliveryOption={deliveryOption}
                    />
                )


            })}



        </div>
    )
}