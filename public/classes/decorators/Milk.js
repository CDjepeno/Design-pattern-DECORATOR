import { DecoratorIngredient } from "../../abstract/DecoratorIngredient.js";
export class Milk extends DecoratorIngredient {
    constructor(d) {
        super();
        this.drink = d;
    }
    cost() {
        return this.drink.cost() + .40;
    }
    getDescription() {
        return `${this.drink.getDescription()}, milk`;
    }
}
