import { ProductsGrid } from './ProductsGrid';
import './HomePage.css'
import { useSearchParams } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import { Header } from '../../components/Header.jsx'


export function HomePage({ cart, loadCartData,setProducts,products }) {

	const [searchParams] = useSearchParams();
    const search = searchParams.get('search');

	useEffect(() => {
		const getHomePage = async () => {
			const path = search ? `/api/products?search=${search}`:`/api/products`;  
;			const response = await axios.get(path);;
			setProducts(response.data);
		};
		getHomePage();
		loadCartData();
	}, [search]);

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
