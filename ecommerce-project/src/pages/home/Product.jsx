import {  useState } from 'react'
import axios from 'axios';
import { formatMoney } from '../../utils/money.js'



export function Product({ image, name, rating, priceCents, id, loadCartData }) {
        const [quantity, setQuantity] = useState(1);
        const [isAdded, setIsAdded]= useState(false);
        let setId;
        return (
            <div className="product-container">
                <div className="product-image-container">
                    <img className="product-image"
                        src={image} />
                </div>

                <div className="product-name limit-text-to-2-lines">
                    {name}
                </div>

                <div className="product-rating-container">
                    <img className="product-rating-stars"
                        src={`images/ratings/rating-${(rating.stars) * 10}.png`} />
                    <div className="product-rating-count link-primary">
                        {rating.count}
                    </div>
                </div>

                <div className="product-price">
                    {formatMoney(priceCents)}
                </div>

                <div className="product-quantity-container">
                    <select  value={quantity} onChange={(event)=>{
                        const quantitySelected = Number(event.target.value);
                        setQuantity(quantitySelected);
                        console.log(quantity);
                    }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>

                <div className="product-spacer"></div>

                <div 
                className="added-to-cart"
                style={{opacity:isAdded ? 1:0}}
                >
                    <img src="images/icons/checkmark.png" />
                    Added
                </div>

                <button
                    className="add-to-cart-button button-primary"
                    onClick={async () => {
                        await axios.post('/api/cart-items', {
                            productId: id,
                            quantity: quantity,
                        });
                        await loadCartData();
                        
                        setIsAdded(true);
                        clearTimeout(setId);
                        setId = setTimeout(()=>{
                            setIsAdded(false);

                        },2000);
                        

                        }}

                >
                    Add to Cart
                </button>
            </div>
        )
    }