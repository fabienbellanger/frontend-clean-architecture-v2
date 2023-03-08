import {GetSalesUseCase, Sale} from "@poc-clear-archi/domain";

export interface SalesStoreState {
    sales: Sale[]
    loading: boolean
}

export abstract class SalesStore<R> implements SalesStoreState {
    // State
    sales: Sale[] = [];
    loading = false;

    // Use cases
    getSalesUC = new GetSalesUseCase(R);

    async getSales() {
        this.loading = true;
        try {
            this.sales = await this.getSalesUC.execute();
            this.loading = false;
        } catch (e) {
            this.sales = [];
            this.loading = false;
            console.error('[ERROR] getSales()', e);
        }
    }
}