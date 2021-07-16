import { Drink } from "../abstract/Drink.js";
export class Sumatra extends Drink {
    constructor(d, s) {
        super();
        this.description = d;
        this.size = s;
    }
    cost() {
        return this.calculateCostPerSize(this.size);
    }
    calculateCostPerSize(size) {
        let cost = 0;
        switch (size) {
            case 'XL':
                cost = 2;
                break;
            case 'L':
                cost = 1.7;
                break;
            case 'M':
                cost = 1.5;
                break;
            default:
                break;
        }
        return cost;
    }
}
