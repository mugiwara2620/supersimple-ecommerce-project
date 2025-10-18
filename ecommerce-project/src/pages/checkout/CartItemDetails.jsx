import { formatMoney } from '../../utils/money.js';
import axios from 'axios';




export function CartItemDetails({ productData,product }) {
    return (
        <>
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
        </>
    )
}