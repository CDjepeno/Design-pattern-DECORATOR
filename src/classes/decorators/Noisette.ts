import { DecoratorIngredient } from "../../abstract/DecoratorIngredient";
import { Drink } from '../../abstract/Drink';

export class Noisette extends DecoratorIngredient  {

  drink: Drink

  constructor(d: Drink) {
    super()
    this.drink = d 
  }

  getDescription() {
    return `${this.drink.getDescription()}, noisette`
  }

  cost() {
    return this.drink.cost() + .35
  }

}