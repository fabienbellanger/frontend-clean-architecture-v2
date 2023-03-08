import {CreateSaleRequest, SaleRepository} from "../ports";
import {Price, Sale} from "../entities";

export class CreateSaleUseCase {
    constructor(private saleRepository: SaleRepository) {}

    async execute(request: CreateSaleRequest): Promise<Sale> {
        const sale = new Sale(
            request.id,
            new Date(request.date),
            new Price(request.price, 'EUR'),
            request.state,
        );
        return await this.saleRepository.createSale(sale);
    }
}