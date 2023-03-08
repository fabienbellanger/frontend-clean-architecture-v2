import type {Sale} from "@poc-clean-archi/domain";
import {Price} from "@poc-clean-archi/domain";

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
            price: this.displayPrice(sale?.price),
            state: sale?.state || '',
        }
    }

    private static displayPrice(price: Price | undefined): string {
        if (price === undefined) {
            return '';
        }
        if (price.currency === 'EUR') {
            return price.value.toString() + ' €';
        }
        return price.value.toString() + ' ' + price.currency;
    }
}