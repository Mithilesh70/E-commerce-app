import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreComponent } from './store.component';
import { FormsModule } from '@angular/forms';

import { ModelModule } from '../../Model/model.module';
//import { CartSummaryComponent } from '../cart-summary/cart-summary.component';

import { CartDetailsComponent } from '../cart-details/cart-details.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { RouterModule } from '@angular/router';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { UnchangedStringPipe } from '../unchanged-string.pipe';

@NgModule({
  declarations: [
    StoreComponent,

    CartDetailsComponent,
    CheckoutComponent,
    UnchangedStringPipe,
  ],
  imports: [
    ModelModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    MatSliderModule,
    MatButtonModule,
  ],
  providers: [],
  exports: [StoreComponent, CartDetailsComponent, CheckoutComponent],
})
export class StoreModule {}
