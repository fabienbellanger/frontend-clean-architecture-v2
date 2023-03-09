import type { CreateSaleRequest, SaleService } from "../ports";
import type { Sale } from "../entities";

export class CreateSaleUseCase {
    constructor(private saleService: SaleService) {
    }

    async execute(request: CreateSaleRequest): Promise<Sale> {
        return await this.saleService.createSale(request);
    }
}