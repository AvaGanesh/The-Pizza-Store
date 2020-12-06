import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { Order } from 'src/app/Model/order';
import { DataShareService } from 'src/app/Services/data-share.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartItems: Order[];
  totalPrice = 0;
  deliveryCharges = 0;
  constructor(private dataShareService: DataShareService) { }
  
  options: any = {
    path: 'https://assets9.lottiefiles.com/packages/lf20_R8CW5F.json',
  };


  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  ngOnInit(): void {
    this.dataShareService.getAllOrders().then((res) => {
      this.cartItems = res;
      this.calculatePrice();
    }).catch((err) => {
      console.log(err);
      this.cartItems = [];
    });
  }


  orderUpdated(event: Order) {
    const index = this.cartItems.findIndex((ele) => ele.pizza.id === event.pizza.id);
    if (event.quantity === 0) {
      this.cartItems.splice(index, 1);
      this.dataShareService.removeItem(event.pizza.id);
    } else {
      this.cartItems.splice(index, 1);
      this.cartItems.push(event);
    }
    this.calculatePrice();
  }

  calculatePrice() {
    this.totalPrice = 0;
    this.cartItems.forEach((item) => {
      this.totalPrice += item.pizza.price * item.quantity;
    });

    if (this.totalPrice > 500) {
      this.deliveryCharges = 0;
    } else {
      this.deliveryCharges = 30;
    }
  }



}
