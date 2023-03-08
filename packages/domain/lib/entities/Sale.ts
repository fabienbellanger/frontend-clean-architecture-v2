import {Price} from "./Price";

export class Sale {
    constructor(
        public id: string,
        public date: Date,
        public price: Price,
        public state: string,
    ) {}

    static empty(): Sale {
        return new Sale('', new Date(), new Price(0.0, 'EUR'), 'open');
    }
}