import type { CreateSaleRequest, Sale } from "@poc-clean-archi/domain";

export interface SaleRepository {
    createSale(sale: CreateSaleRequest): Promise<Sale>;

    getSales(): Promise<Sale[]>;
}