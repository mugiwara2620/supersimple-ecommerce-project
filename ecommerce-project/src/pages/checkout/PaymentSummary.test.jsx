import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import { PayementSummary } from './PaymentSummary';
import axios from 'axios';
import { useLocation } from "react-router";



vi.mock('axios');
describe('payment summary intigration test', () => {
    let payementSummary;
    let loadCartData;
    let user;

    beforeEach(() => {
        payementSummary = {
            "totalItems": 4,
            "productCostCents": 1230,
            "shippingCostCents": 999,
            "totalCostBeforeTaxCents": 2229,
            "taxCents": 223,
            "totalCostCents": 2450
        };
        user = userEvent.setup();
        loadCartData = vi.fn();
    })

    it('PayemmentSmmary test', () => {
        render(
            <MemoryRouter>
                <PayementSummary
                    payementSummary={payementSummary}
                    loadCartData={loadCartData}
                />
            </MemoryRouter>

        );

        expect(
            screen.getByText('Items (4):')
        ).toBeInTheDocument();
        // const cost = ;

        expect(
            within(screen.getByTestId('product-cost')).getByText('$12.30')
        ).toBeInTheDocument();
        //1 method
        expect(
            within(
                screen.getByTestId('shipping-cost')).getByText('$9.99')

        ).toBeInTheDocument();

        //2 method
        expect(
            screen.getByTestId('shipping-cost')
        ).toHaveTextContent('$9.99');

        expect(
            screen.getByTestId('total-cost')
        ).toHaveTextContent('$24.50')
    }
    )
    it('place-your-order-button test', async () => {
        function Location() {
            const location = useLocation();
            return (
                <div data-testid="url-path">{location.pathname}</div>
            )
        }
        render(
            <MemoryRouter>
                <Location />
                <PayementSummary
                    payementSummary={payementSummary}
                    loadCartData={loadCartData}
                />
            </MemoryRouter>
        );
        const placeButton = screen.getByTestId("place-your-order-button");
        await user.click(placeButton);

        // expect(axios.post).toHaveBeenCalledWith(
        //     '/api/orders',
        //     {
        //         "totalItems": 4,
        //         "productCostCents": 1230,
        //         "shippingCostCents": 999,
        //         "totalCostBeforeTaxCents": 2229,
        //         "taxCents": 223,
        //         "totalCostCents": 2450
        //     }
        // );
        expect(axios.post).toHaveBeenCalledWith('/api/orders');
        expect(loadCartData).toHaveBeenCalled();
        expect(screen.getByTestId('url-path')).toHaveTextContent('/orders');
    })
})