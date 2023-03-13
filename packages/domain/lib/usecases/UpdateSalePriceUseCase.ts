import type { Price, Sale } from "../entities";
import type { SaleService } from "../ports";

export class UpdateSalePriceUseCase {
    constructor(private service: SaleService) {
    }

    async execute(sale: Sale, newPrice: Price): Promise<Sale> {
        return await this.service.updateSalePrice(sale, newPrice);
    }
}
