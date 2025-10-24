import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Product } from './Product';
import axios from 'axios';

vi.mock('axios');  //mock the package

describe('Product component', () => {
    let product = {
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
                stars: 4.5,
                count: 87
            },
            priceCents: 1090,
            keywords: ["socks", "sports", "apparel"]
        };
    let loadCartData;
    it('displays the product details correctly', () => {
        const rating = product.rating;
        render(<Product
            key={product.id}
            image={product.image}
            name={product.name}
            rating={product.rating}
            priceCents={product.priceCents}
            id={product.id}
            loadCartData={loadCartData}
        />);
        expect(
            screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")
        ).toBeInTheDocument();

        expect(
            screen.getByText("$10.90")
        ).toBeInTheDocument();

        expect(
            screen.getByTestId('product-image')
        ).toHaveAttribute('src', "images/products/athletic-cotton-socks-6-pairs.jpg");

        expect(
            screen.getByTestId('product-rating')
        ).toHaveAttribute('src',`images/ratings/rating-${(rating.stars) * 10}.png`);
        expect(
            screen.getByText(`${rating.count}`)
        ).toBeInTheDocument();
    });
    loadCartData = vi.fn();
    beforeEach(()=>{
        product = {
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
                stars: 4.5,
                count: 87
            },
            priceCents: 1090,
            keywords: ["socks", "sports", "apparel"]
        };
    });

    it('adds a product to the cart',async()=>{
        const loadCartData = vi.fn();
        render(<Product
            key={product.id}
            image={product.image}
            name={product.name}
            rating={product.rating}
            priceCents={product.priceCents}
            id={product.id}
            loadCartData={loadCartData}
        />);

        const user = userEvent.setup();
    const addToCartButton = screen.getByTestId('add-to-cart-button');
    await user.click(addToCartButton);

    expect(axios.post).toHaveBeenCalledWith(
      '/api/cart-items',
      {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1
      }
    );
        expect(loadCartData).toHaveBeenCalled();


        
    })
});
