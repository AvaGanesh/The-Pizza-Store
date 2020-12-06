import { Pizza, Topping } from './response-model';

export class Order {
    pizza: Pizza;
    topping: string[];
    quantity: number;
    size: string;

    constructor(pizza: Pizza, topping: string[], quantity: number, size: string) {
        this.pizza = pizza;
        this.topping = topping;
        this.quantity = quantity;
        this.size = size;
    }
}
