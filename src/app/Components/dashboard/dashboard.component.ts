import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pizza } from 'src/app/Model/response-model';
import { APIService } from 'src/app/Services/api.service';
import { DataShareService } from 'src/app/Services/data-share.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isVegOnly: boolean;
  sortArr = ['Ratings', 'Price'];
  sortValue: string;
  pizzaArr: Pizza[];
  searchText: string;
  constructor(private service: APIService,
              private snackBar: MatSnackBar,
              private dataShareService: DataShareService) { }

  ngOnInit(): void {
    this.dataShareService.getPizzas().then((result) => {
      this.pizzaArr = result;
    }).catch((err) => {
      this.getServerData();
    });
  }


  getServerData() {
    this.service.getPizzaList().subscribe((res) => {
      this.pizzaArr = res;
      this.dataShareService.setPizza(res);
    }, (error) => {
      this.snackBar.open('Error while loading data', '', {
        duration: 500,
        horizontalPosition: 'start',
        verticalPosition: 'bottom',
      });
    });
  }

  sortFieldChange(data: any) {
    console.log(data);
    this.sortValue = data;
  }

}
