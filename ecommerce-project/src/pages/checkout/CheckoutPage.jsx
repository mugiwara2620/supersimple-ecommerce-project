import './CheckoutPage.css'
import './CheckoutHeader.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import {PayementSummary} from './PaymentSummary.jsx';
import { CheckoutHeader } from './CheckoutHeader';
import { OrderSummary } from './OrderSummary.jsx';

export function Checkout({ cart,loadCartData }) {
	const [deliveryOptions, setDeliveryOptions] = useState([]);
	const [payementSummary, setPayementSummary] = useState(null);
	const [selectedDeliveryOption,setSelectedDeliveryOption] = useState(null);

	useEffect(()=>{
		const fetchCheckoutData=async ()=>{				
			const response = await axios.get('./api/payment-summary')
			setPayementSummary(response.data);
			
		};
		fetchCheckoutData();

	},[cart]);

	useEffect(() => {
		
		const fechDel = async()=>{
		const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
		setDeliveryOptions(response.data);
	};
		fechDel();
		
			
	}, []);

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
					setSelectedDeliveryOption ={setSelectedDeliveryOption}
						cart={cart}
						deliveryOptions={deliveryOptions}
						selectedDeliveryOption={selectedDeliveryOption}
						loadCartData={loadCartData} />
					<PayementSummary
					payementSummary={payementSummary}
					loadCartData={loadCartData} />

				</div>
			</div>
		</>
	)
}