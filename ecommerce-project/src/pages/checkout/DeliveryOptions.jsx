import dayjs from 'dayjs';
export function DeliveryOptions({deliveryOptions,product}){
    return(
        <div className="delivery-options" >
                                    <div className="delivery-options-title">
                                        Choose a delivery option:
                                    </div>
                                    {deliveryOptions.map((deliveryOption) => {
                                        return (
                                            <div key={deliveryOption.id} className="delivery-option">
                                                <input
                                                    type="radio"
                                                    checked={deliveryOption.id === product.deliveryOptionId}
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

                                    })}



                                </div>
    )
}