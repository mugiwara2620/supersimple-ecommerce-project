import { formatMoney } from '../../utils/money.js';
import axios from 'axios';
import { useState } from 'react';




export function CartItemDetails({ productData, product, loadCartData }) {
    const [isUpdated, setIsUpdated] = useState(false);
    const [updatedQuantity, setUpdatedQuantity] = useState(product.quantity);
    const deleteProduct = async () => {
        axios.delete(`/api/cart-items/${product.productId}`)
    }
    const updateQuantityFunction = () => {
        setIsUpdated(!isUpdated);
        if (isUpdated) {
            axios.put(` /api/cart-items/${product.productId}`,

                { quantity: updatedQuantity }
            );
            loadCartData();
        }
    }
    const deleteProductFunction=() => {
            deleteProduct();
            loadCartData();
        }
    const canceleUpdateFunction=()=>{
        setUpdatedQuantity(product.quantity);
        setIsUpdated(false);
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
                    <span>
                        Quantity: <span className="quantity-label">
                            {isUpdated ?
                                <input
                                    className='updated-quantity'
                                    style={{ width: '50px' }} type="number"
                                    value={updatedQuantity} placeholder={product.quantity}
                                    min={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            updateQuantityFunction();
                                        }else if(e.key==='Escape'){
                                         canceleUpdateFunction();
                                        }
                                    }}

                                    onChange={(e) => {
                                        setUpdatedQuantity(Number(e.target.value))

                                    }} /> :
                                <span> {updatedQuantity} </span>}
                        </span>
                    </span>
                    <span
                        className="update-quantity-link link-primary"
                        onClick={updateQuantityFunction}>

                        {isUpdated ? 'Save' : 'Update'}

                    </span>
                    <span
                        className="delete-quantity-link link-primary"
                        onClick={deleteProductFunction}>
                        Delete
                    </span>
                </div>
            </div>
        </>
    )
}