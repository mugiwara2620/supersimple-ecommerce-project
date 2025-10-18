import {  useRef } from 'react'
import axios from 'axios';
import './HomePage.css'
import {formatMoney} from '../utils/money.js'
import { Header } from '../components/Header'
// import { products } from '../../starting-code/data/products.js'


export function HomePage({cart,products}) {
	function Product({ image, name, rating, priceCents, id }) {
		const refElement = useRef('');
		
		function addToCart(quantity) {

			axios.post('/api/cart-items',{
					
					productId: id,
					quantity: Number(quantity),
					
				}).then((response)=>{
					console.log(response.data);
					console.log(cart);

			})
			

			
			



			}

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

					<div ref={refElement} className="product-quantity-container">
						<select id={id}>
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

					<div className="added-to-cart">
						<img src="images/icons/checkmark.png" />
						Added
					</div>

					<button
						className="add-to-cart-button button-primary"
						onClick={() => {
							const quantity = document.getElementById(id).value;
							addToCart(quantity)
							

						}}
					>
						Add to Cart
					</button>
				</div>
			)


		}
		

		function Products() {

			return (
				<>
					{products.map((product) => {
						return (
							<Product
								key={product.id}
								image={product.image}
								name={product.name}
								rating={product.rating}
								priceCents={product.priceCents}
								id={product.id}
							/>



						)
					})}
				</>
			)
		}

		
		return (
			<>
				<link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
				<title>Home page</title>
				<Header
					 cart={cart}
					// cartQuantity={cartQuantity}
				/>

				<div className="home-page">
					<div className="products-grid">
						<Products />
					</div>
				</div>
			</>

		)
	}
