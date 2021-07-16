import { Drink } from "../abstract/Drink";

export class Sumatra extends Drink  {

  constructor(d: string) {
    super()
    this.description = d
  }

  cost() {
    return 1
  }

}