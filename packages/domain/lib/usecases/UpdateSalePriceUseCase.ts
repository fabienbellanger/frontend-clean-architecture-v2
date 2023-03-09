import { Price, Sale } from "../entities";

export class UpdateSalePriceUseCase {
    execute(sale: Sale, newPrice: Price): Sale {
        if (sale.price.currency !== newPrice.currency) {
            return sale;
        }
        sale.price = newPrice
        return sale;
    }
}
