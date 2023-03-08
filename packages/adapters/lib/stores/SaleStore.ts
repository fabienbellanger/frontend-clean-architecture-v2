import {CreateSaleRequest, CreateSaleUseCase, Sale} from "@poc-clear-archi/domain";

export interface SaleStoreState {
    sale: Sale | undefined
    loading: boolean
}

export abstract class SaleStore<R> implements SaleStoreState {
    // State
    sale: Sale | undefined = undefined;
    loading = false;

    // Use cases
    createSaleUC = new CreateSaleUseCase(R);

    async createSale(request: CreateSaleRequest) {
        this.loading = true;
        try {
            this.sale = await this.createSaleUC.execute(request);
            this.loading = false;
        } catch (e) {
            this.sale = undefined;
            this.loading = false;
            console.error('[ERROR] createSale()', e);
        }
    }
}