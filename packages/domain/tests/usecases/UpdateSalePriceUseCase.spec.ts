import { Price, Sale, UpdateSalePriceUseCase } from "@poc-clean-archi/domain";

describe('update sale price use case', () => {
    test('check if price is updated with same currency', () => {
        let sale = new Sale('1', new Date('2023-03-01'), new Price(10.9, 'EUR'), 'open');
        const expectedSale = new Sale('1', new Date('2023-03-01'), new Price(11.95, 'EUR'), 'open');
        const newPrice = new Price(11.95, 'EUR');
        const useCase = new UpdateSalePriceUseCase();

        sale = useCase.execute(sale, newPrice);

        expect(sale).toEqual(expectedSale);
    });

    test('check if price is not updated with different currency', () => {
        let sale = new Sale('1', new Date('2023-03-01'), new Price(10.9, 'EUR'), 'open');
        const expectedSale = new Sale('1', new Date('2023-03-01'), new Price(10.9, 'EUR'), 'open');
        const newPrice = new Price(11.95, 'CHF');
        const useCase = new UpdateSalePriceUseCase();

        sale = useCase.execute(sale, newPrice);

        expect(sale).toEqual(expectedSale);
    });
});