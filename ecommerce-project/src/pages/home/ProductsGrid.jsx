import { Product } from "./Product"

export function ProductsGrid({ products, loadCartData}) {
    console.log(products);

    
    return (
       <> 
            {products.map((product) => {
                      return(  <Product
                            key={product.id}
                            image={product.image}
                            name={product.name}
                            rating={product.rating}
                            priceCents={product.priceCents}
                            id={product.id}
                            loadCartData={loadCartData}
                        />)})
            }
        </>
    )
}