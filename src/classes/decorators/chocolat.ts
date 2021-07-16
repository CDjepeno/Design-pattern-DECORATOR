import { DecoratorIngredient } from "../../abstract/DecoratorIngredient";
import { Drink } from '../../abstract/Drink';

export class Chocolat extends DecoratorIngredient  {

  drink: Drink

  constructor(d: Drink) {
    super()
    this.drink = d
  }

  getDescription() {
    return `${this.drink.getDescription()}, chocolate`
  }

  cost() {
    return this.drink.cost() + .30 
  }

}