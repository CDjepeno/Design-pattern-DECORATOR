import { DecoratorIngredient } from "../../abstract/DecoratorIngredient.js";
export class Chocolat extends DecoratorIngredient {
    constructor(d) {
        super();
        this.drink = d;
    }
    getDescription() {
        return `${this.drink.getDescription()}, chocolate`;
    }
    cost() {
        return this.drink.cost() + .30;
    }
}
