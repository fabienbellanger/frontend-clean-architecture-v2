import {CreateSaleRequest, SaleRepository} from "../ports";
import {Price, Sale} from "../entities";

export class CreateSaleUseCase {
    constructor(private saleRepository: SaleRepository) {}

    async execute(request: CreateSaleRequest) {
        try {
            const sale = new Sale(
                request.id,
                new Date(request.date),
                new Price(request.price, 'EUR'),
                request.state,
            );
            await this.saleRepository.createSale(sale);
            // TODO: Presenter ?
        } catch (e) {
            // TODO: Manage error
            // TODO: Presenter ?
        }
    }
}