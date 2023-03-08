import {SalePresenter} from "@poc-clean-archi/adapters";
import {Price, Sale} from "@poc-clean-archi/domain";

describe('SaleRepositoryHttp', () => {
    test('fromDomain with undefined sale', () => {
        const salePresenter = SalePresenter.fromDomain(undefined);
        const expectedSalePresenter = new SalePresenter('', '', '', '');
        expect(salePresenter).toEqual(expectedSalePresenter);
    })

    test('fromDomain with price in euro', () => {
        const salePresenter = SalePresenter.fromDomain(new Sale(
            '1',
            new Date('2023-02-01'),
            new Price(10.0, 'EUR'),
            'open',
        ));
        expect(salePresenter.price).toEqual('10 €');
    })

    test('fromDomain with price not in euro', () => {
        const salePresenter = SalePresenter.fromDomain(new Sale(
            '1',
            new Date('2023-02-01'),
            new Price(10.0, 'CHF'),
            'open',
        ));
        expect(salePresenter.price).toEqual('10 CHF');
    })
})