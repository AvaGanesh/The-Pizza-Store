import { AnimationOptions } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { DataShareService } from 'src/app/Services/data-share.service';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss']
})
export class ItemMenuComponent implements OnInit {
  orderQuantity: number;
  options: any = {
    path: 'https://assets9.lottiefiles.com/packages/lf20_R8CW5F.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  constructor(private service: DataShareService, private router: Router) { }

  ngOnInit(): void {
    console.log('Item menu got created');
    this.service.getAllOrders().then((res) => {
      this.orderQuantity = res.length;
      console.log(res);
    }).catch((err) => {
      this.orderQuantity = 0;
    });
  }

  goToCheckout() {
    this.router.navigateByUrl('/checkout');
  }

}
