import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Pizza } from 'src/app/Model/response-model';
import { PizzaDetailsModalComponent } from '../pizza-details-modal/pizza-details-modal.component';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss']
})
export class PizzaCardComponent implements OnInit {

  hideElement = true;
  @Input() pizzaData: Pizza;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  hide() {
    this.hideElement = true;
  }

  show() {
    this.hideElement = false;
  }

  showPizzaDetails() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '35%';
    // dialogConfig.height = '90%';
    // dialogConfig.maxHeight = '90vh';
    dialogConfig.data = this.pizzaData;
    dialogConfig.backdropClass = 'custom-backdrop';
    const dialogRef = this.dialog.open(PizzaDetailsModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
    
    });
  }


}
