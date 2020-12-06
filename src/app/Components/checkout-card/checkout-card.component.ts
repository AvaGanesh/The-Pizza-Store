import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/Model/order';
import { DataShareService } from 'src/app/Services/data-share.service';

@Component({
  selector: 'app-checkout-card',
  templateUrl: './checkout-card.component.html',
  styleUrls: ['./checkout-card.component.scss']
})
export class CheckoutCardComponent implements OnInit {

  @Input() orderDetails: Order;
  @Output() orderUpdated = new EventEmitter();
  toppings: string;
  constructor(private dataShareService: DataShareService) { }

  ngOnInit(): void {
    this.toppings = this.orderDetails.topping.toString();
    // this.toppings = this.toppings.substr(0, this.toppings.length - 1);
  }

  changeQuantity(event) {
    this.orderDetails.quantity = event;
    this.orderUpdated.emit(this.orderDetails);
  }

}
