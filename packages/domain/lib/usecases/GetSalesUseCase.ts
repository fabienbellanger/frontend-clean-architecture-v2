import type { SaleRepository } from "../ports";
import type { Sale } from "../entities";

export class GetSalesUseCase {
    constructor(private saleRepository: SaleRepository) {
    }

    async execute(): Promise<Sale[]> {
        return await this.saleRepository.getSales();
    }
}