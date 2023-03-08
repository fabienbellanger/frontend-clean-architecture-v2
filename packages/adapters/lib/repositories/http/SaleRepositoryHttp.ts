import {HttpClient} from "./HttpClient";
import {Sale, SaleRepository} from "@poc-clear-archi/domain";
import {SaleDto, SaleResponse} from "./responses/SaleResponse";

export class SaleRepositoryHttp implements SaleRepository {
    constructor(private httpClient: HttpClient) {
    }

    createSale(sale: Sale): Promise<Sale> {
        return this.httpClient.post<SaleDto, Sale>(
            '/sales',
            sale,
        )
            .then(sale => SaleResponse.toSaleDomain(sale));
    }

    getSales(): Promise<Sale[]> {
        return this.httpClient.get<SaleDto[]>('/sales')
            .then(sales => SaleResponse.toSalesDomain(sales));
    }
}