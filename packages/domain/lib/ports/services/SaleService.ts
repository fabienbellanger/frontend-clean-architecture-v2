import type { CreateSaleRequest, Sale } from "@poc-clean-archi/domain";
import type { Price, SaleRepository } from "@poc-clean-archi/domain";

// TODO: Add unit tests
export class SaleService {
    constructor(private saleRepository: SaleRepository) {
    }

    async createSale(sale: CreateSaleRequest): Promise<Sale> {
        return this.saleRepository.createSale(sale);
    }

    async getSales(): Promise<Sale[]> {
        return this.saleRepository.getSales();
    }

    async updateSalePrice(sale: Sale, newPrice: Price): Promise<Sale> {
        if (sale.price.currency !== newPrice.currency) {
            return sale;
        }
        sale.price = newPrice;
        return sale;
    }
}