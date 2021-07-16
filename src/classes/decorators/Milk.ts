import { DecoratorIngredient } from "../../abstract/DecoratorIngredient";
import { Drink } from "../../abstract/Drink";

export class Milk extends DecoratorIngredient {
  drink: Drink;

  constructor(d: Drink) {
    super();
    this.drink = d;
  }

  cost() {
    return this.drink.cost() + 0.4;
  }

  getDescription() {
    return `${this.drink.getDescription()}, milk`;
  }
}
