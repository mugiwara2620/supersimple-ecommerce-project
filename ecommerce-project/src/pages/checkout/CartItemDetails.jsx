import { formatMoney } from '../../utils/money.js';
import axios from 'axios';




export function CartItemDetails({ productData,product,loadCartData }) {
    const deleteProduct = async()=>{
        axios.delete(`/api/cart-items/${product.productId}`)
    }
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
                    <span className='updated-quantity'> 
                        Quantity: <span className="quantity-label">{product.quantity}</span>
                    </span>
                    <span 
                    className="update-quantity-link link-primary"
                    onClick={()=>{
                        document.querySelector('.updated-quantity').innerHTML = `<input type="number"/>`; 
                        
                    }}>
                        Update
                    </span>
                    <span
                        className="delete-quantity-link link-primary"
                        onClick={()=>{
                            deleteProduct();
                            loadCartData();
                        }}>
                        Delete
                    </span>
                </div>
            </div>
        </>
    )
}