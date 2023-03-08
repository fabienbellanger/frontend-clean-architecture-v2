import {CreateSaleRequest, Sale, SaleRepository} from "@poc-clean-archi/domain";

export class SaleRepositoryBuilder {
    private getSales: () => Promise<Sale[]> = () => Promise.resolve([]);
    private createSale: (request: CreateSaleRequest) => Promise<Sale> = () => Promise.resolve(
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

    build(): SaleRepository {
        return {
            getSales: this.getSales,
            createSale: this.createSale,
        };
    }
}