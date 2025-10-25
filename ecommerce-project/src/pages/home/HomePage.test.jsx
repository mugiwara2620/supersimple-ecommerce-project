import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { HomePage } from './HomePage';
import useEvent from '@testing-library/user-event'
import axios from 'axios';

vi.mock('axios');
let user;


describe('HomePage component', () => {
    let loadCartData;

    beforeEach(() => {
        user = useEvent.setup();

        loadCartData = vi.fn(); //mock function
        axios.get.mockImplementation(async (urlPath) => {
            if (urlPath === '/api/products') {
                return {
                    data: [{
                        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                        image: "images/products/athletic-cotton-socks-6-pairs.jpg",
                        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
                        rating: {
                            stars: 4.5,
                            count: 87
                        },
                        priceCents: 1090,
                        keywords: ["socks", "sports", "apparel"]
                    },
                    {
                        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                        image: "images/products/intermediate-composite-basketball.jpg",
                        name: "Intermediate Size Basketball",
                        rating: {
                            stars: 4,
                            count: 127
                        },
                        priceCents: 2095,
                        keywords: ["sports", "basketballs"]
                    }]
                }
            }
        });
    })
    it('displays the products correct', async () => {
        render(
            <MemoryRouter>
                <HomePage
                    cart={[]}
                    loadCartData={loadCartData} />
            </MemoryRouter>

        );

        const productContainers = await screen.findAllByTestId('product-container');
        expect(productContainers.length).toBe(2);
        expect(
            within(productContainers[0])
                .getByText("Black and Gray Athletic Cotton Socks - 6 Pairs"
                )).toBeInTheDocument();

        expect(productContainers.length).toBe(2);
        expect(
            within(productContainers[1])
                .getByText("Intermediate Size Basketball"
                )).toBeInTheDocument();
    });

    it('Add to button is worked', async () => {
        render(
            <MemoryRouter>
                <HomePage
                    cart={[]}
                    loadCartData={loadCartData} />
            </MemoryRouter>

        );
        const productContainers = await screen.findAllByTestId('product-container');

        const firstButton = within(productContainers[0]).getByTestId("add-to-cart-button");
        const firtQuantitySelector = within(productContainers[0])   .getByTestId("selector-container");

        await user.selectOptions(firtQuantitySelector,'2');
        await user.click(firstButton);


        const secondButton = within(productContainers[1]).getByTestId("add-to-cart-button");
        const secondQuantitySelector = within(productContainers[1]).getByTestId("selector-container");

        await user.selectOptions(secondQuantitySelector,'3');

        await user.click(secondButton);

        expect(axios.post).toHaveBeenNthCalledWith(1,
            '/api/cart-items',
            {
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity: 2
            }
        );


        expect(axios.post).toHaveBeenNthCalledWith(2,
            '/api/cart-items',
            {
                productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                quantity: 3
            }
        );
        expect(loadCartData).toHaveBeenCalled();


    })

})