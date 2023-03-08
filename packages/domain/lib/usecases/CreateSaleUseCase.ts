import type {CreateSaleRequest, SaleRepository} from "../ports";
import type {Sale} from "../entities";

export class CreateSaleUseCase {
    constructor(private saleRepository: SaleRepository) {}

    async execute(request: CreateSaleRequest): Promise<Sale> {
        return await this.saleRepository.createSale(request);
    }
}