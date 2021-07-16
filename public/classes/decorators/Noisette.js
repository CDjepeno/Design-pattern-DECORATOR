import { DecoratorIngredient } from "../../abstract/DecoratorIngredient.js";
export class Noisette extends DecoratorIngredient {
    constructor(d) {
        super();
        this.drink = d;
    }
    getDescription() {
        return `${this.drink.getDescription()}, noisette`;
    }
    cost() {
        return this.drink.cost() + .35;
    }
}
