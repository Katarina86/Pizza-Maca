import { Pizza } from "./pizza";

export class PizzaList {
    
    results: Pizza[];
  
    constructor(obj?: any) {
      this.results = obj && obj.results.map(elem => { return new Pizza(elem); }) || [];
    }
  }