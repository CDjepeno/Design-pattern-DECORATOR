export abstract class Drink {
  description: string = "boisson inconu"
  size: string = 'S'

  getDescription() {
    return this.description
  } 

  getSize() {
    this.size
  }

  abstract cost(): number;
}