import type {Sale} from "@poc-clean-archi/domain";

export interface SaleRepository {
    createSale(sale: Sale): Promise<Sale>;
    getSales(): Promise<Sale[]>;
}