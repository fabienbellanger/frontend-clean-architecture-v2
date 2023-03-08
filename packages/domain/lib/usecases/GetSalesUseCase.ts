import {CreateSaleRequest, SaleRepository} from "../ports";

export class GetSalesUseCase {
    constructor(private saleRepository: SaleRepository) {}

    async execute(_request: CreateSaleRequest) {
        try {
            await this.saleRepository.getSales();
            // TODO: Presenter ?
        } catch (e) {
            // TODO: Manage error
            // TODO: Presenter ?
        }
    }
}