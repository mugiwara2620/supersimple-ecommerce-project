import axios from 'axios';
import { useNavigate } from 'react-router';
import { formatMoney } from '../../utils/money.js';

export function PayementSummary({payementSummary,loadCartData}) {
    const navigate = useNavigate();

    const createOrder = async()=>{
        await axios.post('/api/orders');
        await loadCartData();
        navigate('/orders');
    }
    return (
        payementSummary && <div className="payment-summary">
            <div className="payment-summary-title">
                Payment Summary
            </div>

            <div 
            className="payment-summary-row"
            data-testid="product-cost">
                <div>Items ({payementSummary.totalItems}):</div>
                <div className="payment-summary-money">{formatMoney(payementSummary.productCostCents)}</div>
            </div>

            <div 
            className="payment-summary-row"
            data-testid="shipping-cost">
                <div>Shipping &amp; handling:</div>
                <div className="payment-summary-money">{formatMoney(payementSummary.shippingCostCents)}</div>
            </div>
            <div 
            className="payment-summary-row subtotal-row"
            data-testid="total-cost-before-tax">
                <div>Total before tax:</div>
                <div className="payment-summary-money">{formatMoney(payementSummary.totalCostBeforeTaxCents)}</div>
            </div>

            <div 
            className="payment-summary-row subtotal-row"
            data-testid="tax">
                <div>Estimated tax (10%):</div>
                <div className="payment-summary-money">{formatMoney(payementSummary.taxCents)}</div>
            </div>
            <div 
            className="payment-summary-row total-row"
            data-testid="total-cost">
                <div>Order total:</div>
                <div className="payment-summary-money">{formatMoney(payementSummary.totalCostCents)}</div>
            </div>

            <button 
            onClick={createOrder}
            className="place-order-button button-primary"
            data-testid="place-your-order-button">
                Place your order
            </button>
        </div>
    )
}