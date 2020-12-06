import { Injectable } from '@angular/core';
import { Order } from '../Model/order';
import { Pizza } from '../Model/response-model';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private orderMap: Map<number, Order>;
  private pizzas: Pizza[];

  constructor() {
    this.orderMap = new Map();
  }

  setPizza(data: Pizza[]) {
    this.pizzas = data;
  }


  getPizzas(): Promise<Pizza[]> {
    return new Promise((resolve, reject) => {
      if (this.pizzas === undefined || this.pizzas === null) {
        reject('No data found');
      } else {
        resolve(this.pizzas);
      }
    });
  }


  getAllOrders(): Promise<Order[]> {
    return new Promise((resolve, reject) => {
      if (this.orderMap.size !== 0) {
        const orders = [];
        this.orderMap.forEach((ele) => {
          orders.push(ele);
        });
        resolve(orders);
      } else {
        reject('No data found');
      }
    });
  }


  getOrderById(id: number): Promise<Order> {
    return new Promise((resolve, reject) => {
      if (this.orderMap.size !== 0 && this.orderMap.has(id)) {
        resolve(this.orderMap.get(id));
      } else {
        reject('No data found');
      }
    });
  }

  removeItem(id: number) {
    this.orderMap.delete(id);
  }

  addNewOrder(id: number, data: Order) {
    this.orderMap.set(id, data);
    console.log(this.orderMap);
  }

}
