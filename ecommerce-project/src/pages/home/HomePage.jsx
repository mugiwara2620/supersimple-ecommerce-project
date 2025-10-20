import {ProductsGrid} from './ProductsGrid';
import './HomePage.css'
import { Header } from '../../components/Header.jsx'


export function HomePage({cart,products,loadCartData}) {
	
	return (
			<>
				<link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
				<title>Home page</title>
				<Header
					 cart={cart}
				/>

				<div className="home-page">
					<div className="products-grid">
						<ProductsGrid 
						products={products}
						cart={cart}
						loadCartData={loadCartData}
						 />
					</div>
				</div>
			</>

		)
	}
