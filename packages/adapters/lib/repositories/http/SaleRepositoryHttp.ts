import {HttpClient} from "./HttpClient";
import {Sale, SaleRepository} from "@poc-clear-archi/domain";
import {SaleDto, SaleResponse} from "./responses/SaleResponse";

export class SaleRepositoryHttp implements SaleRepository {
    constructor(private httpClient: HttpClient) {}

    createSale(sale: Sale): Promise<void> {
        return this.httpClient.post<void, SaleDto>('/sales', {
            id: sale.id,
            date: sale.date.toISOString(),
            state: sale.state,
            price: sale.price.value.toString(),
        } as SaleDto)
            .then();
    }

    getSales(): Promise<Sale[]> {
        return this.httpClient.get<SaleDto[]>('/sales')
            .then(sales => SaleResponse.toSalesDomain(sales));
    }
}