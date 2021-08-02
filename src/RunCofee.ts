import { Drink } from "./abstract/Drink";
import { Chocolat } from "./classes/decorators/chocolat";
import { Milk } from "./classes/decorators/Milk";
import { Noisette } from "./classes/decorators/Noisette";
import { Expresso } from "./classes/Expresso";
import { Sumatra } from './classes/Sumatra';

export class RunCofee {
  static main1() {
    let drink: Drink = new Expresso("expresso", "XL");
    drink = new Chocolat(drink);
    drink = new Noisette(drink);

    return `
      Votre commande : ${drink.getDescription()}
      Le prix : ${+drink.cost()}
    `;
  }
  static main2() {
    let drink: Drink = new Sumatra("sumatra", "XL");
    drink = new Milk(drink);
    drink = new Noisette(drink);

    return `
      Votre commande : ${drink.getDescription()}
      Le prix : ${+drink.cost()}
    `;
  }
}

