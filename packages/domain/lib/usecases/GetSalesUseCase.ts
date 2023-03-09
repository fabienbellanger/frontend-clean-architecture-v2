import type { SaleService } from "../ports";
import type { Sale } from "../entities";

export class GetSalesUseCase {
    constructor(private saleService: SaleService) {
    }

    async execute(): Promise<Sale[]> {
        return await this.saleService.getSales();
    }
}