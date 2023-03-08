export class CreateSaleRequest {
    constructor(
        public id: string,
        public date: string,
        public state: string,
        public price: number,
    ) {}
}