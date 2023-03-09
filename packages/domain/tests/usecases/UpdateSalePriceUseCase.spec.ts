import { Price, Sale, UpdateSalePriceUseCase, SaleService } from "@poc-clean-archi/domain";
import { SaleServiceBuilder } from "../builders/SaleServiceBuilder";

describe('update sale price use case', () => {
    test('check if price is updated with same currency', async () => {
        let sale = new Sale('1', new Date('2023-03-01'), new Price(10.9, 'EUR'), 'open');
        const expectedSale = new Sale('1', new Date('2023-03-01'), new Price(11.95, 'EUR'), 'open');
        const newPrice = new Price(11.95, 'EUR');
        const service = new SaleServiceBuilder()
            .withUpdateSalePrice(() => Promise.resolve(expectedSale))
            .build();
        const useCase = new UpdateSalePriceUseCase(service);

        sale = await useCase.execute(sale, newPrice);

        expect(sale).toEqual(expectedSale);
    });

    test('check if price is not updated with different currency', async () => {
        let sale = new Sale('1', new Date('2023-03-01'), new Price(10.9, 'EUR'), 'open');
        const expectedSale = new Sale('1', new Date('2023-03-01'), new Price(10.9, 'EUR'), 'open');
        const newPrice = new Price(11.95, 'CHF');
        const service = new SaleServiceBuilder()
            .withUpdateSalePrice(() => Promise.resolve(expectedSale))
            .build();
        const useCase = new UpdateSalePriceUseCase(service);

        sale = await useCase.execute(sale, newPrice);

        expect(sale).toEqual(expectedSale);
    });
});