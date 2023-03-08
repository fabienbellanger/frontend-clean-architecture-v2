import {Sale} from "@poc-clear-archi/domain";

export interface SaleRepository {
    createSale(sale: Sale): Promise<void>;
    getSales(): Promise<Sale[]>;
}