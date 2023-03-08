import type {HttpClient} from "./HttpClient";
import type {Sale, SaleRepository} from "@poc-clean-archi/domain";
import {type SaleDto, SaleResponse} from "./responses/SaleResponse";

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