import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';


const routes: Routes = [
  {
    component: DashboardComponent,
    path: 'dashboard'
  },
  {
    component: CheckoutComponent,
    path: 'checkout'
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
