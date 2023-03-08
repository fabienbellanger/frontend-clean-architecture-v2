export class CreateSaleRequest {
    constructor(
        public id: string,
        public date: string,
        public price: number,
        public state: string,
    ) {}
}