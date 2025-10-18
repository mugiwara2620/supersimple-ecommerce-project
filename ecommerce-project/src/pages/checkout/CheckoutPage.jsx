import './CheckoutPage.css'
import './CheckoutHeader.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import {PayementSummary} from './PaymentSummary.jsx';
import { CheckoutHeader } from './CheckoutHeader';
import { OrderSummary } from './OrderSummary.jsx';

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

	let selectedDeliveryOption;
	return (
		<>
			<link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />
			<title>Chekout</title>

			<CheckoutHeader />

			<div className="checkout-page">
				<div className="page-title">Review your order</div>

				<div className="checkout-grid">
					<OrderSummary
						cart={cart}
						deliveryOptions={deliveryOptions}
						selectedDeliveryOption={selectedDeliveryOption} />
					<PayementSummary
					payementSummary={payementSummary} />

				</div>
			</div>
		</>
	)
}