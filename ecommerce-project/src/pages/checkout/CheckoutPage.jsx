import './CheckoutPage.css'
import './CheckoutHeader.css'
import axios from 'axios';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { formatMoney } from '../../utils/money.js';
import { CheckoutHeader } from './CheckoutHeader';

export function Checkout({ cart }) {
	console.log(cart);
	const [deliveryOptions, setDeliveryOptions] = useState([]);
	const [payementSummary, setPayementSummary] = useState(null);

	useEffect(() => {
		axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
			.then((response) => {
				setDeliveryOptions(response.data);

			});
		axios.get('./api/payment-summary')
			.then((response) => {
				setPayementSummary(response.data);
			})
	}, [])

	function ProductData({ selectedDeliveryOption }) {




		let y =
			cart.map((product) => {
				const productData = product.product;
				console.log(selectedDeliveryOption);




				return (

					<div key={product.name} className="cart-item-container">
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
									<span className="delete-quantity-link link-primary">
										Delete
									</span>
								</div>
							</div>

							<div className="delivery-options" >
								<div className="delivery-options-title">
									Choose a delivery option:
								</div>
								{deliveryOptions.map((deliveryOption) => {
									console.log(deliveryOption);
									return (
										<div key={deliveryOption.id} className="delivery-option">
											<input
												type="radio"
												checked={deliveryOption.id === product.deliveryOptionId}
												className="delivery-option-input{ productData.name}"
												name={`deliver-option-${product.id}`}
												onClick={() => {
													product.deliveryOptionId = deliveryOption.id;
												}}
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
						</div>
					</div>

				)
			})




		console.log(y);
		return y;



	}

	let selectedDeliveryOption;
	return (
		<>
			<link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />
			<title>Chekout</title>

			<CheckoutHeader />

			<div className="checkout-page">
				<div className="page-title">Review your order</div>

				<div className="checkout-grid">
					<div className="order-summary">
						{/* <div className="cart-item-container">
							<div className="delivery-date">
								Delivery date: Tuesday, June 21
							</div>

							<div className="cart-item-details-grid">
								<img className="product-image"
									src="images/products/athletic-cotton-socks-6-pairs.jpg" />

								<div className="cart-item-details">
									<div className="product-name">
										Black and Gray Athletic Cotton Socks - 6 Pairs
									</div>
									<div className="product-price">
										$10.90
									</div>
									<div className="product-quantity">
										<span>
											Quantity: <span className="quantity-label">2</span>
										</span>
										<span className="update-quantity-link link-primary">
											Update
										</span>
										<span className="delete-quantity-link link-primary">
											Delete
										</span>
									</div>
								</div>

								<div className="delivery-options">
									<div className="delivery-options-title">
										Choose a delivery option:
									</div>
									<div className="delivery-option">
										<input type="radio" checked
											className="delivery-option-input"
											name="delivery-option-1" />
										<div>
											<div className="delivery-option-date">
												Tuesday, June 21
											</div>
											<div className="delivery-option-price">
												FREE Shipping
											</div>
										</div>
									</div>
									<div className="delivery-option">
										<input type="radio"
											className="delivery-option-input"
											name="delivery-option-1" />
										<div>
											<div className="delivery-option-date">
												Wednesday, June 15
											</div>
											<div className="delivery-option-price">
												$4.99 - Shipping
											</div>
										</div>
									</div>
									<div className="delivery-option">
										<input type="radio"
											className="delivery-option-input"
											name="delivery-option-1" />
										<div>
											<div className="delivery-option-date">
												Monday, June 13
											</div>
											<div className="delivery-option-price">
												$9.99 - Shipping
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="cart-item-container">
							<div className="delivery-date">
								Delivery date: Wednesday, June 15
							</div>

							<div className="cart-item-details-grid">
								<img className="product-image"
									src="images/products/intermediate-composite-basketball.jpg" />

								<div className="cart-item-details">
									<div className="product-name">
										Intermediate Size Basketball
									</div>
									<div className="product-price">
										$20.95
									</div>
									<div className="product-quantity">
										<span>
											Quantity: <span className="quantity-label">1</span>
										</span>
										<span className="update-quantity-link link-primary">
											Update
										</span>
										<span className="delete-quantity-link link-primary">
											Delete
										</span>
									</div>
								</div>

								<div className="delivery-options">
									<div className="delivery-options-title">
										Choose a delivery option:
									</div>

									<div className="delivery-option">
										<input type="radio" className="delivery-option-input"
											name="delivery-option-2" />
										<div>
											<div className="delivery-option-date">
												Tuesday, June 21
											</div>
											<div className="delivery-option-price">
												FREE Shipping
											</div>
										</div>
									</div>
									<div className="delivery-option">
										<input type="radio" checked className="delivery-option-input"
											name="delivery-option-2" />
										<div>
											<div className="delivery-option-date">
												Wednesday, June 15
											</div>
											<div className="delivery-option-price">
												$4.99 - Shipping
											</div>
										</div>
									</div>
									<div className="delivery-option">
										<input type="radio" className="delivery-option-input"
											name="delivery-option-2" />
										<div>
											<div className="delivery-option-date">
												Monday, June 13
											</div>
											<div className="delivery-option-price">
												$9.99 - Shipping
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> */}

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
					{payementSummary && <div className="payment-summary">
						<div className="payment-summary-title">
							Payment Summary
						</div>

						<div className="payment-summary-row">
							<div>Items ({payementSummary.totalItems}):</div>
							<div className="payment-summary-money">{formatMoney(payementSummary.productCostCents)}</div>
						</div>

						<div className="payment-summary-row">
							<div>Shipping &amp; handling:</div>
							<div className="payment-summary-money">{formatMoney(payementSummary.shippingCostCents)}</div>
						</div>

						<div className="payment-summary-row subtotal-row">
							<div>Total before tax:</div>
							<div className="payment-summary-money">{formatMoney(payementSummary.totalCostBeforeTaxCents)}</div>
						</div>

						<div className="payment-summary-row">
							<div>Estimated tax (10%):</div>
							<div className="payment-summary-money">{formatMoney(payementSummary.taxCents)}</div>
						</div>

						<div className="payment-summary-row total-row">
							<div>Order total:</div>
							<div className="payment-summary-money">{formatMoney(payementSummary.totalCostCents)}</div>
						</div>

						<button className="place-order-button button-primary">
							Place your order
						</button>
					</div>}

				</div>
			</div>
		</>
	)
}