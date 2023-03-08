import {Sale} from "@poc-clear-archi/domain";

export class SalePresenter {
    constructor(
        public id: string,
        public date: string,
        public price: string,
        public state: string,
    ) {}

    static fromDomain(sale: Sale | undefined): SalePresenter {
        return {
            id: sale?.id || '',
            date: sale?.date.toISOString() || '',
            price: `${sale?.price.value} ${sale?.price.currency}` || '',
            state: sale?.state || '',
        }
    }
}