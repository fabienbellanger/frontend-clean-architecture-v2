import {SaleDto, SaleResponse} from "@poc-clean-archi/adapters";
import {Price, Sale} from "@poc-clean-archi/domain";

describe('SaleResponse', () => {
    test('toSaleDomain', () => {
        const saleDto = {
            id: '1',
            date: '2023-02-01',
            price: 10.5,
            state: 'open',
        } as SaleDto;

        const sale = new Sale(
            '1',
            new Date('2023-02-01'),
            new Price(10.5, 'EUR'),
            'open',
        );

        expect(SaleResponse.toSaleDomain(saleDto)).toEqual(sale);
    })

    test('toSalesDomain', () => {
        const salesDto: SaleDto[] = [
            {
                id: '1',
                date: '2023-02-01',
                price: 10.5,
                state: 'open',
            },
            {
                id: '2',
                date: '2023-02-02',
                price: 20,
                state: 'paid',
            },
        ];

        const sales = [
            new Sale(
                '1',
                new Date('2023-02-01'),
                new Price(10.5, 'EUR'),
                'open',
            ),
            new Sale(
                '2',
                new Date('2023-02-02'),
                new Price(20.0, 'EUR'),
                'paid',
            ),
        ];

        expect(SaleResponse.toSalesDomain(salesDto)).toEqual(sales);
    })
})