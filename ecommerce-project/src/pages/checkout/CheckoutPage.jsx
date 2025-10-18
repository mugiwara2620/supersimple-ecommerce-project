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
		const fetchAppData=async ()=>{
			let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
			setDeliveryOptions(response.data);
		
		
			response = await axios.get('./api/payment-summary')
			setPayementSummary(response.data);
		};
		fetchAppData();
			
	}, []);

	let selectedDeliveryOption;
	return (
		<>
			<link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />
			<title>Chekout</title>

			<CheckoutHeader 
				cart={cart}
			/>

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