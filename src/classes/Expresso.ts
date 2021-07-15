import { Drink } from "../abstract/Drink";

export class Expresso extends Drink  {

  constructor(drink: string) {
    super()
    this.description = drink
  }
}