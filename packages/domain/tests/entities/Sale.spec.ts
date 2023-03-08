import { Price, Sale } from "@poc-clean-archi/domain";

describe('Sale entity', () => {
    test('empty sale', () => {
        const now = new Date();
        const expectedSale = new Sale('', now, new Price(0.0, 'EUR'), 'open');

        expect(Sale.empty()).toEqual(expectedSale);
    })
});
