import { CreateSaleRequest, CreateSaleUseCase, Price, Sale, SaleService } from "@poc-clean-archi/domain";
import { SaleRepositoryBuilder } from "../builders/SaleRepositoryBuilder";

describe('create new sale use case', () => {
    test('check sale creation without error', async () => {
        const repository = new SaleRepositoryBuilder()
            .withCreateSale(() => Promise.resolve(
                new Sale('1', new Date('2023-03-01'), new Price(10.9, 'EUR'), 'open')
            ))
            .build();
        const service = new SaleService(repository);
        const useCase = new CreateSaleUseCase(service);
        const request = new CreateSaleRequest('1', '2023-03-01', 10.9, 'open');

        const sale: Sale = await useCase.execute(request);

        expect(sale.id).toEqual('1');
        expect(sale.date).toEqual(new Date('2023-03-01'));
        expect(sale.state).toEqual('open');
        expect(sale.price).toEqual(new Price(10.9, 'EUR'));
    });
});