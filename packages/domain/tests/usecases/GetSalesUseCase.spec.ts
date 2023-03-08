import { GetSalesUseCase, Price, Sale } from "@poc-clean-archi/domain";
import { SaleRepositoryBuilder } from "../builders/SaleRepositoryBuilder";

describe('get sales use case', () => {
    test('display sales list', async () => {
        const saleRepository = new SaleRepositoryBuilder()
            .withGetSales(() => Promise.resolve([
                new Sale('1', new Date('2023-03-01'), new Price(10.9, 'EUR'), 'open'),
                new Sale('2', new Date('2023-03-02'), new Price(20.95, 'EUR'), 'paid'),
            ]))
            .build();
        const useCase = new GetSalesUseCase(saleRepository);

        const sales = await useCase.execute();

        expect(sales).toHaveLength(2);
        expect(sales[0].id).toEqual('1');
        expect(sales[1].id).toEqual('2');
    });
});