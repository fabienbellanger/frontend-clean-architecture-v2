import type { HttpClient } from "./HttpClient";
import type { Sale, SaleRepository } from "@poc-clean-archi/domain";
import { type SaleDto, SaleResponse } from "./responses/SaleResponse";
import type { CreateSaleRequest } from "@poc-clean-archi/domain";

export class SaleRepositoryHttp implements SaleRepository {
    constructor(private httpClient: HttpClient) {
    }

    createSale(request: CreateSaleRequest): Promise<Sale> {
        return this.httpClient.post<SaleDto, CreateSaleRequest>(
            '/sales',
            request,
        )
            .then(sale => SaleResponse.toSaleDomain(sale));
    }

    getSales(): Promise<Sale[]> {
        return this.httpClient.get<SaleDto[]>('/sales')
            .then(sales => SaleResponse.toSalesDomain(sales));
    }
}