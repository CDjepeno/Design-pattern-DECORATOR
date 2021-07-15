export abstract class Drink {
  description: string = "boisson inconue"

  getDescription() {
    return this.description
  } 

  abstract cost(): number;
}