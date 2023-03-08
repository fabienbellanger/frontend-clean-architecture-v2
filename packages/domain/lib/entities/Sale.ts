import {Price} from "./Price";

export class Sale {
   constructor(
       public id: string,
       public date: Date,
       public price: Price,
       public state: string,
   ) {}
}