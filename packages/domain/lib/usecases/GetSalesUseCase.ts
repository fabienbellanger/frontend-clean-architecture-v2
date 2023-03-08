import {SaleRepository} from "../ports";
import {Sale} from "../entities";

export class GetSalesUseCase {
    constructor(private saleRepository: SaleRepository) {}

    async execute(): Promise<Sale[]> {
        return await this.saleRepository.getSales();
    }
}