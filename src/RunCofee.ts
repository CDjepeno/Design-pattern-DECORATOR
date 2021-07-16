import { Drink } from "./abstract/Drink.js";
import { Chocolat } from "./classes/decorators/chocolat.js";
import { Milk } from "./classes/decorators/Milk.js";
import { Noisette } from "./classes/decorators/Noisette.js";
import { Expresso } from "./classes/Expresso.js";

export class RunCofee {
  static main() {
    let drink: Drink = new Expresso("expresso", "XL");
    drink = new Chocolat(drink);
    drink = new Milk(drink);
    drink = new Noisette(drink);

    console.log(`
      Votre commande : ${drink.getDescription()},
      Le prix : ${+drink.cost()}
      `);
  }
}

RunCofee.main();
