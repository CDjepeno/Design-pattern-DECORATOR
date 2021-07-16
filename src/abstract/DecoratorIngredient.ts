import { Drink } from "./Drink";

export abstract class DecoratorIngredient extends Drink {

  abstract getDescription(): string;

}