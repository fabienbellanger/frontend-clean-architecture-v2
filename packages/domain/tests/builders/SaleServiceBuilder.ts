import { CreateSaleRequest, Price, Sale, SaleService } from "@poc-clean-archi/domain";

export class SaleServiceBuilder {
    private getSales: () => Promise<Sale[]> = () => Promise.resolve([]);
    private createSale: (request: CreateSaleRequest) => Promise<Sale> = () => Promise.resolve(
        Sale.empty()
    );
    private updateSalePrice: (sale: Sale, price: Price) => Promise<Sale> = () => Promise.resolve(
        Sale.empty()
    );

    withGetSales(getSales: () => Promise<Sale[]>) {
        this.getSales = getSales;
        return this;
    }

    withCreateSale(createSale: (request: CreateSaleRequest) => Promise<Sale>) {
        this.createSale = createSale;
        return this;
    }

    withUpdateSalePrice(updateSalePrice: (sale: Sale, price: Price) => Promise<Sale>) {
        this.updateSalePrice = updateSalePrice;
        return this;
    }

    build(): SaleService {
        return {
            getSales: this.getSales,
            createSale: this.createSale,
            updateSalePrice: this.updateSalePrice,
        };
    }
}