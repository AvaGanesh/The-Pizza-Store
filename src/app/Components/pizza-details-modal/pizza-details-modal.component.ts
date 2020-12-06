import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Order } from 'src/app/Model/order';
import { Pizza } from 'src/app/Model/response-model';
import { DataShareService } from 'src/app/Services/data-share.service';

@Component({
  selector: 'app-pizza-details-modal',
  templateUrl: './pizza-details-modal.component.html',
  styleUrls: ['./pizza-details-modal.component.scss']
})
export class PizzaDetailsModalComponent implements OnInit {

  pizza: Pizza;
  count = 0;
  selectedToppings: string[];
  selectedSize: string;
  isLoading = true;
  constructor(  public dialogRef: MatDialogRef<PizzaDetailsModalComponent>,
                private dataService: DataShareService,
                private route: Router,
                private snackBar: MatSnackBar,
                @Inject(MAT_DIALOG_DATA) public data: any) {
                  this.pizza = data;
                }

  ngOnInit(): void {
    this.dataService.getOrderById(this.pizza.id).then((res) => {
      this.selectedSize = res.size;
      this.selectedToppings = res.topping;
      this.count = res.quantity;
      this.isLoading = false;
    }).catch((err) => {
      this.selectedToppings = [];
      this.selectedSize = null;
      this.isLoading = false;
    });
  }

  changeQuantity(count: number){
    this.count = count;
  }

  savetoCart() {
    if (this.selectedSize === undefined || this.selectedSize === null) {
      this.openSnackBar('Please select the size');
    } else {
      this.dataService.addNewOrder(this.pizza.id, new Order(this.pizza, this.selectedToppings, this.count, this.selectedSize));
    }
    this.dialogRef.close();
  }

  toppingChanged(data) {
    if (this.pizza.toppings[0].isRadio) {
      this.selectedToppings.shift();
      this.selectedToppings.push(data);
    } else {
      if (this.selectedToppings.includes(data)) {
        const index = this.selectedToppings.indexOf(data);
        this.selectedToppings.splice(index, 1);
      } else {
        this.selectedToppings.push(data);
      }
    }
  }

  close() {
    this.dialogRef.close();
  }

  sizeChanged(data) {
    this.selectedSize = data;
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 500,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }

}
