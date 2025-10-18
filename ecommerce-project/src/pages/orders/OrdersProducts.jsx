import { formatMoney } from '../../utils/money';
import dayjs from 'dayjs';



export function OrdersProducts({orders}) {
    function Order({ order }) {
        const products = order.products;
        console.log(products);
        const productsOrder = products.map((productsOrder) => {
            const product = productsOrder.product;
            return (
                <div className="order-details-grid">
                    <div className="product-image-container">
                        <img src={product.image} />
                    </div>

                    <div className="product-details">
                        <div className="product-name">
                            {product.name}
                        </div>
                        <div className="product-delivery-date">
                            Arriving on: {dayjs(productsOrder.estimatedDeliveyTimeMs).format('MMMM d')}
                        </div>
                        <div className="product-quantity">
                            Quantity: {productsOrder.quantity}
                        </div>
                        <button className="buy-again-button button-primary">
                            <img className="buy-again-icon" src="images/icons/buy-again.png" />
                            <span className="buy-again-message">Add to Cart</span>
                        </button>
                    </div>

                    <div className="product-actions">
                        <a href="/tracking">
                            <button className="track-package-button button-secondary">
                                Track package
                            </button>
                        </a>
                    </div>
                </div>
            )

        });
        return (
            <div className="order-container">
                <div className="order-header">
                    <div className="order-header-left-section">
                        <div className="order-date">
                            <div className="order-header-label">Order Placed:</div>
                            <div>{dayjs(order.orderTimeMs).format('MMMM d')}</div>
                        </div>
                        <div className="order-total">
                            <div className="order-header-label">Total:</div>
                            <div>{formatMoney(order.totalCostCents)}</div>
                        </div>
                    </div>

                    <div className="order-header-right-section">
                        <div className="order-header-label">Order ID:</div>
                        <div>{order.id}</div>
                    </div>
                </div>
                {productsOrder}
            </div>
        )



    }



    return (orders.map((order) => {
        return (<Order order={order} />)

    }))

}