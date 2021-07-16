import { Drink } from "../abstract/Drink";

export class Expresso extends Drink {
  constructor(d: string, s: string) {
    super();
    this.description = d;
    this.size = s;
  }

  cost() {
    return this.calculateCostPerSize(this.size);
  }

  calculateCostPerSize(size: string) {
    let cost = 0;
    switch (size) {
      case "XL":
        cost = 2;
        break;
      case "L":
        cost = 1.7;
        break;
      case "M":
        cost = 1.5;
        break;

      default:
        break;
    }
    return cost;
  }
}
