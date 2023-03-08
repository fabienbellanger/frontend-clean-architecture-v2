import {Price, Sale} from "@poc-clear-archi/domain";

export interface SaleDto {
    id: string,
    date: string,
    price: number,
    state: string,
}

export class SaleResponse {
    static toSaleDomain(sale: SaleDto): Sale {
        return new Sale(
            sale.id,
            new Date(sale.date),
            new Price(sale.price, 'EUR'),
            sale.state,
        );
    }

    static toSalesDomain(sales: SaleDto[]): Sale[] {
        return sales.map(sale => this.toSaleDomain(sale));
    }
}