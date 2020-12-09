import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PizzaCardComponent } from './Components/pizza-card/pizza-card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './Pipes/sort.pipe';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PizzaDetailsModalComponent } from './Components/pizza-details-modal/pizza-details-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ToggleButtonComponent } from './Components/toggle-button/toggle-button.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CheckoutCardComponent } from './Components/checkout-card/checkout-card.component';
import { FilterPipe } from './Pipes/filter.pipe';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import { ItemMenuComponent } from './Components/item-menu/item-menu.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import {MatCardModule} from '@angular/material/card';
import { SearchPipe } from './Pipes/search.pipe';
import {MatInputModule} from '@angular/material/input';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PizzaCardComponent,
    SortPipe,
    PizzaDetailsModalComponent,
    CheckoutComponent,
    ToggleButtonComponent,
    CheckoutCardComponent,
    FilterPipe,
    ItemMenuComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatSelectModule,
    MatBadgeModule,
    FormsModule,
    MatDividerModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatChipsModule,
    LottieModule.forRoot({ player: playerFactory }),
    BrowserAnimationsModule
  ],
  entryComponents: [
    PizzaDetailsModalComponent
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
